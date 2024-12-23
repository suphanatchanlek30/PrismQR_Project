// src/routes/qrCodeRoutes.js

const express = require('express');
const router = express.Router();
const { createQRCode } = require('../controllers/qrCodeController');

// Route สำหรับสร้าง QR Code ใหม่
router.post('/', createQRCode);

module.exports = router;
