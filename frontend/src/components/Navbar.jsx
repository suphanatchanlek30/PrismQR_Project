import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* Top Banner พร้อมข้อความเลื่อน */}
        <div className="bg-[#01CC03] text-center text-sm h-[37px] flex">
            <marquee 
                behavior="scroll" 
                direction="left" 
                scrollamount="10" 
                className="whitespace-nowrap pt-2 text-[#161616] text-[14px] font-body2 font-medium"> 
                <div className="animate-marquee whitespace-nowrap tracking-widest">
                    GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE GENERATE UNLIMITED QR CODES +++ START FOR FREE +++ GENERATE UNLIMITED QR CODES +++ START FOR FREE
                </div>
            </marquee>
        </div>

        {/* Main Navbar */}
        <nav className='relative flex justify-between items-center px-6 h-[80px] bg-[#000] border-b border-b-[#ffffff43] z-50'>
            {/* Logo */}
            <div className="flex items-center text-[#FFFFFF] text-[28px] font-body2 font-medium">
                Primes QR
            </div>

            {/* Main Menu Right */}
            <div className='flex items-center gap-6'>
                <ul className="hidden md:flex items-center space-x-6 font-normal tracking-[0.5px]">
                    <li><a href="#" className="hover:text-[#01cc04ea] text-[#FFFFFF] text-[14px] duration-100">HOME</a></li>
                    <li><a href="#" className="hover:text-[#01cc04ea] text-[#FFFFFF] text-[14px] duration-100">DOCS</a></li>
                </ul>

                {/* Button */}
                <button className="bg-[#01CC03] px-[16px] py-[12px] text-[14px] font-semibold rounded-[4px] hover:bg-[#01cc04ea] focus:outline-none tracking-[0.5px] duration-100">
                    <a href="https://www.facebook.com/suphanat.chanlek" target='_blank'>CONTACT</a>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar