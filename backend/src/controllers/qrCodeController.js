// src/controllers/qrCodeController.js

const QRCode = require('../models/QRCode');

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

module.exports = {
    createQRCode,
    getAllQRCodes,
    getQRCodeById
};
