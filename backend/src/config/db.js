// src/config/db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// โหลด environment variables
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err.message);
        process.exit(1); // หยุดการทำงานของเซิร์ฟเวอร์ถ้าไม่สามารถเชื่อมต่อกับฐานข้อมูลได้
    }
};

module.exports = connectDB;
