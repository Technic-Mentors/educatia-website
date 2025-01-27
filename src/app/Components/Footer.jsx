import Image from "next/image";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearchLocation, FaPhone, FaPaperPlane, FaClock } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <section className="footer-div">
        <div className="container justify-center items-center mx-auto w-full py-10">
          <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-3">
            {/* First Column */}
            <div className="md:max-w-md">
              <Link
                href="/"
                aria-label="Educatia"
                title="Company"
                className="inline-flex items-center"
              >
                <Image
                  src="/Assets/home-images/Educatia-Logo.png"
                  alt="educatia-study-abroad-consultants"
                  className="h- w-auto"
                  width={70}
                  height={56}
                />
              </Link>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-lg text-gray-800">
                  We don’t just guide you to study abroad—we help you build a
                  brighter, globally connected future. Trust us to turn your
                  aspirations into achievements.
                </p>
                <div className="flex items-center space-x-4 sm:mt-4">
                  <Link href="https://facebook.com" target="_blank">
                    <FaFacebook className="text-2xl text-[#023769]" />
                  </Link>
                  <Link href="https://x.com" target="_blank">
                    <FaTwitter className="text-2xl text-[#023769]" />
                  </Link>
                  <Link href="https://instagram.com" target="_blank">
                    <FaInstagram className="text-2xl text-[#023769]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Second Column */}
            <div>
              <p className="font-semibold px-3 text-xl tracking-wide text-black-800">
                Services
              </p>
              <ul className="mt-2 space-y-2 footer-service-list">
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span >&rarr;</span> Career Counseling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span>&rarr;</span> Selection of University
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span>&rarr;</span> Scholarships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span>&rarr;</span> Application Handling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span>&rarr;</span> Interview Preparation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="flex items-center hover:underline hover:underline-offset-2 text-gray-600 transition-all duration-300 transform hover:text-[#023769] hover:translate-x-2"
                  >
                    <span>&rarr;</span> Pre-Departure Briefing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third Column */}
            <div>
              <p className="font-semibold tracking-wide text-gray-800">
                Contact Info
              </p>
              <ul className="mt-2 space-y-2" style={{lineHeight: "2rem"}}>
                <li>
                  <p className="text-gray-600 flex items-center">
                   <FaSearchLocation className="text-lg text-[#023769]"/>&nbsp; Mumtaz Market, G.T Road Gujranwala
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 flex items-center">
                  <FaPhone className="text-lg text-[#023769]"/>&nbsp; +923 111 122 144
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 flex items-center">
                  <FaPaperPlane className="text-lg text-[#023769]"/>&nbsp; info@educatia.pk
                  </p>
                </li>
                <li>
                  <p className="text-gray-600 flex items-center">
                  <FaClock className="text-lg text-[#023769]"/>&nbsp; Mon - Fri, 9 AM - 5 PM
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col justify-center pt-5 border-t sm:flex-row">
            <p className="text-sm text-gray-600 text-center">
              © Copyright 2025{" "}
              <span className="font-bold text-black">
                Educatia Study Abroad Consultants
              </span>
              . Developed With Love By{" "}
              {/* <Link
                href="https://technicmentors.com"
                target="_blank"
                className="hover:underline hover:underline-offset-1 text-black font-semibold"
              >
                Technic Mentors
              </Link> */}
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
