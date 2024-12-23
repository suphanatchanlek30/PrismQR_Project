// src/controllers/qrCodeController.js
const QRCode = require('../models/QRCode');
const QRCodeLib = require('qrcode'); // Import ไลบรารี qrcode

// ตัวอย่างฟังก์ชันสำหรับสร้าง QR Code ใหม่
const createQRCode = async (req, res) => {
    try {
        const { url, format } = req.body;

        // สร้าง QR Code ใหม่
        const newQRCode = await QRCode.create({ url, format });

        res.status(201).json({
            success: true,
            data: newQRCode,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

// ฟังก์ชันสำหรับดึงรายการ QR Code ทั้งหมด
const getAllQRCodes = async (req, res) => {
    try {
        const qrcodes = await QRCode.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: qrcodes.length,
            data: qrcodes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

// ฟังก์ชันสำหรับดึงรายละเอียด QR Code เฉพาะรายการ
const getQRCodeById = async (req, res) => {
    try {
        const qrcode = await QRCode.findById(req.params.id);

        if (!qrcode) {
            return res.status(404).json({
                success: false,
                message: 'QR Code not found',
            });
        }

        res.status(200).json({
            success: true,
            data: qrcode,
        });
    } catch (error) {
        // ตรวจสอบว่ามีความผิดพลาดเกี่ยวกับ ObjectId หรือไม่
        if (error.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: 'QR Code not found',
            });
        }

        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

// ฟังก์ชันสำหรับดาวน์โหลด QR Code
const downloadQRCode = async (req, res) => {
    try {
        const { id } = req.params;
        let { format } = req.query;

        // ตรวจสอบว่ารูปแบบไฟล์ถูกต้องหรือไม่
        if (!format) {
            // ถ้าไม่ระบุรูปแบบ ให้ใช้รูปแบบเดิมที่เก็บในฐานข้อมูล
            const qrcode = await QRCode.findById(id);
            if (!qrcode) {
                return res.status(404).json({
                    success: false,
                    message: 'QR Code not found',
                });
            }
            format = qrcode.format;
        } else {
            // ตรวจสอบว่า format เป็น png หรือ jpg เท่านั้น
            format = format.toLowerCase();
            if (!['png', 'jpg'].includes(format)) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid format. Only png and jpg are supported.',
                });
            }
        }

        // ค้นหา QR Code จากฐานข้อมูล
        const qrcode = await QRCode.findById(id);
        if (!qrcode) {
            return res.status(404).json({
                success: false,
                message: 'QR Code not found',
            });
        }

        // สร้าง QR Code เป็น Buffer
        const qrBuffer = await QRCodeLib.toBuffer(qrcode.url, {
            type: format === 'jpg' ? 'jpeg' : 'png',
            errorCorrectionLevel: 'H', // ระดับการแก้ไขข้อผิดพลาดสูงสุด
            margin: 2,
            width: 300, // กำหนดขนาด QR Code
        });

        // ตั้งชื่อไฟล์ดาวน์โหลด
        const fileName = `qrcode_${id}.${format}`;

        // ตั้งค่า headers สำหรับการดาวน์โหลดไฟล์
        res.set({
            'Content-Type': format === 'jpg' ? 'image/jpeg' : 'image/png',
            'Content-Disposition': `attachment; filename="${fileName}"`,
            'Content-Length': qrBuffer.length,
        });

        // ส่ง Buffer ของ QR Code เป็น response
        res.send(qrBuffer);
    } catch (error) {
        console.error('Error downloading QR Code:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error',
        });
    }
};

module.exports = {
    createQRCode,
    getAllQRCodes,
    getQRCodeById,
    downloadQRCode
};
