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

const helmet = require('helmet');

app.use(helmet());

// นำเข้า Route สำหรับ QR Code
const qrCodeRoutes = require('./routes/qrCodeRoutes');

// ใช้ Route สำหรับ QR Code
app.use('/api/qrcodes', qrCodeRoutes);

const cors = require('cors');
// ตั้งค่า CORS
app.use(cors({
    origin: 'http://localhost:5173', // อนุญาตเฉพาะ Frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // อนุญาต HTTP methods ที่ต้องใช้
    allowedHeaders: ['Content-Type', 'Authorization'], // ระบุ headers ที่อนุญาต
}));

// กำหนดเส้นทางเบื้องต้น
app.get('/', (req, res) => {
    res.send('QR Code Generator Backend');
});

// กำหนดพอร์ตจาก environment variables หรือใช้ 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
