// src/models/QRCode.js

const mongoose = require('mongoose');

const QRCodeSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true,
        },
        format: {
            type: String,
            enum: ['png', 'jpg'],
            default: 'png',
        },
        // ถ้าต้องการเชื่อมโยงกับผู้ใช้ ให้เพิ่มฟิลด์ user
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
        // เพิ่มฟิลด์อื่นๆ ตามต้องการ เช่น title, description เป็นต้น
    },
    {
        timestamps: true, // จะสร้างฟิลด์ createdAt และ updatedAt อัตโนมัติ
    }
);

module.exports = mongoose.model('QRCode', QRCodeSchema);
