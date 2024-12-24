import React, { useState } from 'react'
// import axios from "axios";
import apiClient from './../server/qrCodeService';


const Home = () => {

    const [formData, setFormData] = useState({
        url: "",
        format: "png",
      });

    // สเตตสำหรับจัดการสถานะการโหลด, ข้อผิดพลาด, และลิงก์ดาวน์โหลด
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

    // ฟังก์ชัน Submit ฟอร์ม
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');
        setDownloadLink('');

        try {
            const response = await apiClient.post("/api/qrcodes", formData);
            const qrCodeId = response.data.data._id;
      
            // สร้างลิงก์ดาวน์โหลด
            const downloadLink = `http://localhost:5000/api/qrcodes/${qrCodeId}/download?format=${formData.format}`;
            handleQRCodeCreated(downloadLink);
          } catch (error) {
            console.error("Error creating QR Code:", error);
            setErrorMessage(error.response?.data?.message || "Error creating QR Code");
          } finally {
            setLoading(false);
          }
    };

    const handleQRCodeCreated = (link) => {
        setDownloadLink(link);
      };
    

    return (

        <section className="relative flex font-body2 items-center justify-center bg-black text-white py-20 px-4">
            <div className='absolute green-glow'></div>

            <div className="max-w-4xl h-[1080px] text-center mt-10">
                {/* ข้อความบรรทัดแรก */}
                <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight tracking-wide mb-4 z-50">
                    The fastest and the most powerful <span className='text-[#01CC03]'>QR code</span> generator
                </h1>

                {/* form */}
                <form
                    onSubmit={handleSubmit}
                    className="url relative font-body2 flex flex-col items-center justify-center mt-[100px] z-50 max-w-md w-full mx-auto">
                    {/* Label */}
                    <label className="block text-left w-full text-sm md:text-base font-medium text-gray-100 mb-2">
                        Enter your URL
                    </label>
                    {/* Input + Dropdown */}
                    <div className='url flex flex-row max-w-md w-full mx-auto gap-2'>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            placeholder="https://example.com"
                            className="w-full p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-[#01cc04bf] transition duration-300"
                            required
                            value={formData.url}
                            onChange={handleChange}
                        />

                        {/* Dropdown เลือกสกุลไฟล์ */}
                        <select
                            id="extensionSelect"
                            name="format"
                            className="border text-[#000] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cc04bf] duration-300"
                            value={formData.format}
                            onChange={handleChange}
                        >
                            <option value="png">.png</option>
                            <option value="jpg">.jpg</option>
                        </select>
                    </div>

                    {/* ปุ่ม Submit */}
                    <button
                        type="submit"
                        className="mt-6 px-6 py-3 bg-[#01CC03] text-black font-semibold rounded-md hover:bg-[#01cc04ea] transition"
                        disabled={loading}
                    >
                        {loading ? 'กำลังสร้าง...' : 'Submit'}
                    </button>
                </form>

                {/* แสดง Error */}
                {errorMessage && (
                    <p className="text-red-400 mt-4">{errorMessage}</p>
                )}

                {/* แสดงลิงก์ดาวน์โหลด QR Code หากมี */}
                {downloadLink && (
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-6">ดาวน์โหลด QR Code ของคุณ</h3>
                        <a
                            href={downloadLink}
                            download
                            className="px-6 py-3 bg-[#01CC03] text-black font-semibold rounded-md hover:bg-[#01cc04ea] transition"
                        >
                            ดาวน์โหลด QR Code
                        </a>
                    </div>
                )}
            </div>

        </section>
    )
}

export default Home