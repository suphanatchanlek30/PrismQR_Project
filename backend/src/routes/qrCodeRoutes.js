// src/routes/qrCodeRoutes.js

const express = require('express');
const router = express.Router();
const { createQRCode, getAllQRCodes, getQRCodeById } = require('../controllers/qrCodeController');

// Route สำหรับสร้าง QR Code ใหม่
router.post('/', createQRCode);

// Route สำหรับดึง QR Code ทั้งหมด
router.get('/', getAllQRCodes);

// Route สำหรับดึงรายละเอียด QR Code เฉพาะรายการ
router.get('/:id', getQRCodeById);

module.exports = router;
