import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport } from "@fortawesome/free-solid-svg-icons";


function Hero() {
  return (
    <>
      <section className="hero-section relative">
        <div className="hero-overlay absolute inset-0 bg-black bg-opacity-50">
          {/* Ensures the overlay covers the entire section */}
        </div>

        <div className="relative py-10 px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col right-col justify-center text-white">
              <h1 className="text-4xl font-bold leading-snug">
                Follow Your Dreams To Study Abroad
              </h1>
              <p className="text-xl mt-4">
                Educatia Consultants is one of the leading study abroad
                consultants. Begin your journey of studying abroad with us and
                clear your education queries. Book your student visa consultancy
                today.
              </p>
              <button
                type="button"
                className="mt-7 px-6 py-3 site-button text-white text-lg font-medium rounded-full w-fit"
              >
                Apply Now
              </button>
            </div>

            {/* Column 2 */}
            <div>
              <Image
                src="/Assets/home-images/hero-2nd-col.avif"
                alt="study-abroad-consultants"
                height={300}
                width={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        {/* <section className=" stats-section">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className=" p-6 rounded-lg">
              <div className="numbers">
                <div className="icon">
                    <span>
                        <FontAwesomeIcon icon={faPassport} className="font-icon"/>
                    </span>
                </div>
                <div className="stat-txt">
                    <h2>
                        5+
                    </h2>
                    <p>Years of experience</p>
                </div>
              </div>
            </div>

          </div>
        </section> */}
        </div>

      </section>
    </>
  );
}

export default Hero;
