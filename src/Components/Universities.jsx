"use client";
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Universities() {
  const sectionRef = useRef(null);
  const logoRefs = useRef([]);

  const uni = [
    { src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-1.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-2.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-3.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-4.png", alt: "study-abroad-universities" },
    { src: "/Assets/home-images/logo-5.png", alt: "study-abroad-universities" },
  ];

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
    });

    gsap.from(logoRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <>
      <section ref={sectionRef} className="university">
        <div className="container py-10 mx-auto justify-cener w-full items-center">
          <div className="section-head text-center mb-6">
            <h2>Top Universities <span className="text-black"> Shaping</span> Your Future</h2>
          </div>
          <div className="grid md:grid-cols-5 grid-cols-2 lg:px-2 px-3 justify-center gap-4">
            {uni.map((logo, ind) => (
              <div
                className="uni-logo border text-center"
                key={ind}
                ref={(el) => (logoRefs.current[ind] = el)}
              >
                <Image src={logo.src} alt={logo.alt} height={120} width={180} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Universities;
