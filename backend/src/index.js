// src/index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // นำเข้า connectDB

// โหลด environment variables
dotenv.config();

// สร้าง Express app
const app = express();

// Middleware สำหรับแปลงข้อมูลเป็น JSON
app.use(express.json());

// เชื่อมต่อกับ MongoDB
connectDB();

// กำหนดเส้นทางเบื้องต้น
app.get('/', (req, res) => {
    res.send('QR Code Generator Backend');
});

// กำหนดพอร์ตจาก environment variables หรือใช้ 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
