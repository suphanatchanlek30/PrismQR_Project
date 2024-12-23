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

module.exports = {
    createQRCode,
};
