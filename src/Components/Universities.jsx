import Image from 'next/image'
import React from 'react'

function Universities() {
    const uni = [
        {src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities"},
        {src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities"},
    ]
  return (
    <>
      <section className="university">
        <div className="container py-10 mx-auto justify-cener w-full items-center">
            <div className="section-head text-center mb-6">
                <h2>Top Universities <span className="text-black"> Shaping</span> Your Future</h2>
            </div>
            <div className="grid md:grid-cols-5 sm:grid-cols-2 justify-center gap-4">
                {uni.map((logo,ind) => (
                <div className="uni-logo border text-center" key={ind}>
                    <Image src={logo.src} alt={logo.alt} height={120} width={180} />
                </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Universities
