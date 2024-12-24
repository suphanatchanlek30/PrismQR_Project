import React from 'react'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black font-body2 py-4 border-t border-t-[#ffffff43]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        {/* ข้อความลิขสิทธิ์ */}
        <span className="text-[12px] sm:text-[14px] font-normal text-gray-500 tracking-wider">
          © 2024 MADE BY SUPHANAT CHANLEK.
        </span>

        {/* ไอคอนโซเชียล */}
        <div className="flex items-center space-x-4">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/suphanatttt/"
            target='_blank'
            className="rounded-full bg-transparent p-2 text-gray-400 transition hover:text-white focus:outline-none"
          >
           <PiInstagramLogoFill className='text-[21px]'/>
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/ChanlekSup73912"
            target='_blank'
            className="rounded-full bg-transparent p-2 text-gray-400 transition hover:text-white focus:outline-none"
          >
            <FaXTwitter className='text-[21px]'/>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/suphanat.chanlek"
            target='_blank'
            className="rounded-full bg-transparent p-2 text-gray-400 transition hover:text-white focus:outline-none"
          >
            <FaFacebookF className='text-[21px]'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer