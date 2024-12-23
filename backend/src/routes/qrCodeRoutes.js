// src/routes/qrCodeRoutes.js

const express = require('express');
const router = express.Router();
const { createQRCode, getAllQRCodes, getQRCodeById, downloadQRCode, updateQRCode, deleteQRCode } = require('../controllers/qrCodeController');

// Route สำหรับสร้าง QR Code ใหม่
router.post('/', createQRCode);

// Route สำหรับดึง QR Code ทั้งหมด
router.get('/', getAllQRCodes);

// Route สำหรับดึงรายละเอียด QR Code เฉพาะรายการ
router.get('/:id', getQRCodeById);

// Route สำหรับดาวน์โหลด QR Code
router.get('/:id/download', downloadQRCode);

// Route สำหรับอัปเดต QR Code
router.put('/:id', updateQRCode);

// Route สำหรับลบ QR Code
router.delete('/:id', deleteQRCode);

module.exports = router;
