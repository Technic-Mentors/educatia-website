import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneVolume, FaTwitter, FaUser, FaUserAlt, FaYoutube } from 'react-icons/fa'

function Topbar() {
  return (
    <>
<section className="topbar">
  <div className="container flex justify-center w-full mx-auto py-4">
    <div className="hidden sm:grid md:grid-cols-2 gap-80 space-x-6 justify-between items-center ">
      <div className="topbar-left flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaPhoneVolume className='text-white text-xl'/>
          <p className="text-sm text-white">+923 111 122 144</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaEnvelope className='text-white text-xl'/>
          <p className="text-sm text-white ">info@educatia.pk</p>
        </div>
      </div>
      <div className="topbar-right pl-6 flex justify-between items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaUserAlt className='text-white'/>
          <p className="text-base text-white">Login</p>
        </div> <span className='text-white'>|</span>
        <div className="flex items-center space-x-4">
                  <Link href="https://facebook.com" target="_blank">
                    <FaFacebook className="text-xl text-white" />
                  </Link>
                  <Link href="https://x.com" target="_blank">
                    <FaTwitter className="text-xl text-white" />
                  </Link>
                  <Link href="https://x.com" target="_blank">
                    <FaYoutube className="text-xl text-white" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <FaInstagram className="text-xl text-white" />
                  </Link>
                </div>
        
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Topbar
