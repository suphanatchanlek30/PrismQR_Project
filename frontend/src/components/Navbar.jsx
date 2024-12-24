import React from 'react'
// import Logo from "../assets/Logo/logo-noback.svg";

const Navbar = () => {
  return (
    <div>
        {/* Top Banner พร้อมข้อความเลื่อน */}
        <div className="bg-[#01CC03] text-center text-sm h-[37px] flex">
            <marquee 
                behavior="scroll" 
                direction="left" 
                scrollamount="10" 
                class="whitespace-nowrap" 
                className="pt-2 text-[#161616] text-[14px] font-body2 font-medium"> 
                <div class="animate-marquee whitespace-nowrap tracking-widest">
                    GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE
                </div>
            </marquee>
        </div>

        {/* Main Navbar */}
        <nav className='flex justify-between items-center px-6 h-[80px] bg-[#000]'>
            {/* Logo */}
            <div className="flex items-center text-[#FFFFFF] text-[28px] font-body2 font-medium">
                Primes QR
            </div>

            {/* Main Menu Right */}
            <div className='flex items-center gap-6'>
            <ul className="hidden md:flex items-center space-x-6 font-normal tracking-[0.5px]">
                <li><a href="#" className="hover:underline text-[#FFFFFF] text-[14px]">HOME</a></li>
                <li><a href="#" className="hover:underline text-[#FFFFFF] text-[14px]">DOCS</a></li>
            </ul>

            {/* Button */}
            <button className="bg-[#01CC03] px-[16px] py-[12px] text-[14px] font-semibold rounded-[4px] hover:bg-[#01cc04ea] focus:outline-none tracking-[0.5px]">
                CONTACT
            </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar