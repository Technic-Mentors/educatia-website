"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Destinations() {
  const [currentPath, setCurrentPath] = useState();
  const sectionRef = useRef(null);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const context = gsap.context(() => {
      // Title Animation
      gsap.from(".section-head", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-head",
          start: "top 90%",
        },
      });

      // Destination Image Animations
      gsap.from(".dest-img", {
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -150 : 150), // Alternate left and right animation
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => context.revert(); // Cleanup GSAP context
  }, []);

  const destinations = [
    {
      name: "UK",
      img: "/Assets/home-images/destination-uk.avif",
      alt: "study-in-uk",
    },
    {
      name: "Australia",
      img: "/Assets/home-images/study-in-australia.avif",
      alt: "study-in-australia",
    },
    {
      name: "Canada",
      img: "/Assets/home-images/study-in-canada.avif",
      alt: "study-in-canada",
    },
    {
      name: "Finland",
      img: "/Assets/home-images/study-in-finland.avif",
      alt: "study-in-finland",
    },
    {
      name: "Turkey",
      img: "/Assets/home-images/study-in-turkey.avif",
      alt: "study-in-turkey",
    },
    {
      name: "Cyprus",
      img: "/Assets/home-images/study-in-cyprus.avif",
      alt: "study-in-cyprus",
    },
    {
      name: "New Zealand",
      img: "/Assets/home-images/study-in-newzealand.avif",
      alt: "study-in-newzealand",
    },
    {
      name: "Sweden",
      img: "/Assets/home-images/study-in-sweden.avif",
      alt: "study-in-sweden",
    },
    {
      name: "Norway",
      img: "/Assets/home-images/study-in-norway.avif",
      alt: "study-in-norway",
    },
  ];

  return (
    <>
      <section className="destinations py-8" ref={sectionRef}>
        <div className="container mx-auto w-full justify-center items-center">
          <div className="section-head text-center my-5">
            <h2>
              Explore Your Path to
              <span className="text-black"> Global Opportunities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-center items-center lg-px-10 px-6  gap-6">
            {currentPath === "/" ? (
              destinations.slice(0, 6).map((dest, ind) => (
                <div className="dest-img relative group" key={ind}>
                  <div className="w-full h-[300px]">
                    <Image
                      src={dest.img}
                      alt={dest.alt}
                      height={400}
                      width={400}
                      className="transition-transform duration-500 object-cover w-full h-full group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute bottom-0  text-xl font-bold items-center justify-center text-center w-full bg-white text-[#023769] p-3 bg-opacity-75  group-hover:opacity-100  ">
                    {dest.name}
                  </span>
                </div>
              ))
            ) : (
              destinations.map((dest, ind) => (
                <div className="dest-img relative group" key={ind}>
                  <div className="w-full h-[300px]">
                    <Image
                      src={dest.img}
                      alt={dest.alt}
                      height={400}
                      width={400}
                      className="transition-transform duration-500 object-cover w-full h-full group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute bottom-0  text-xl font-bold items-center justify-center text-center w-full bg-white text-[#023769] p-3 bg-opacity-75  group-hover:opacity-100  ">
                    {dest.name}
                  </span>
                </div>
              ))
            )}
          </div>
          <div className="text-center w-full justify-center">
            <Link href="/study-abroad-destinations" className={currentPath === "/study-abroad-destinations" ? "hidden" : "button2 mt-6"}>
              <button type="button" className="">
                View More
              </button>
            </Link>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Destinations;
