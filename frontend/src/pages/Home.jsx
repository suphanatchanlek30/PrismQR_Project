import React from 'react'

const Home = () => {
    return (

        <section className="relative flex font-body2 items-center justify-center bg-black text-white py-20 px-4">
            <div className='absolute green-glow'></div>

            <div className="max-w-4xl h-[1080px] text-center mt-10">
                {/* ข้อความบรรทัดแรก */}
                <h1 className="relative text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-tight tracking-wide mb-4 z-50">
                    The fastest and the most powerful <span className='text-[#01CC03]'>QR code</span> generator
                </h1>

                {/* form */}
                <form className="url relative font-body2 flex flex-col items-center justify-center mt-[100px] z-50 max-w-md w-full mx-auto">
                    {/* Label */}
                    <label  className="block text-left w-full text-sm md:text-base font-medium text-gray-100 mb-2">
                        Enter your URL
                    </label>
                    {/* Input */}
                    <div className='url flex flex-row max-w-md w-full mx-auto gap-2'>
                        <input
                            type="url"
                            id="url"
                            name="url"
                            placeholder="https://example.com"
                            className="w-full p-3 rounded-md border text-black focus:outline-none focus:ring-2 focus:ring-[#01cc04bf] transition duration-300"
                            required
                        />
                        {/* Dropdown เลือกสกุลไฟล์ */}
                        <select
                            id="extensionSelect"
                            className="border text-[#000] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01cc04bf] duration-300"
                        >
                            <option value=".png">.png</option>
                            <option value=".jpg">.jpg</option>
                        </select>
                    </div>
                </form>

                {/* ปุ่ม Submit */}
                <button
                    type="submit"
                    className="mt-6 px-6 py-3 bg-[#01CC03] text-black font-semibold rounded-md hover:bg-[#01cc04ea] transition"
                >
                    Submit
                </button>

            </div>

        </section>
    )
}

export default Home