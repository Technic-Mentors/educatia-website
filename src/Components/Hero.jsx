import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading Animation
      gsap.from(".hero-heading", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".hero-heading",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Paragraph Animation
      gsap.from(".hero-paragraph", {
        opacity: 0,
        x: -50,
        duration: 1.5,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".hero-paragraph",
          start: "top 85%",
        },
      });

      // Button Animation
      gsap.from(".hero-button", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".hero-button",
          start: "top 90%",
        },
      });
      gsap.from(".hero-img", {
        opacity: 0,
        scale: 0.9,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".hero-img",
          start: "top 90%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
  
    <section className="hero-section relative" ref={heroRef}>
      <div className="hero-overlay absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative py-10 lg:px-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col right-col justify-center text-white">
            <h1 className="text-4xl font-bold leading-snug hero-heading">
              Follow Your Dreams To Study Abroad
            </h1>
            <p className="text-xl mt-4 hero-paragraph">
              Educatia Consultants is one of the leading study abroad
              consultants. Begin your journey of studying abroad with us and
              clear your education queries. Book your student visa consultancy
              today!
            </p>
            <Link href="/contact">
              <button
                type="button"
                className="button2 mt-6 hero-button"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #fff",
                  color: "#fff",
                }}
              >
                Apply Now
              </button>
            </Link>
          </div>

          {/* Column 2 */}
          <div>
            <Image
              src="/Assets/home-images/hero-2nd-col.avif"
              alt="study-abroad-consultants"
              height={300}
              width={300}
              className="w-full h-auto hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
}

export default Hero;
