import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function ApplyNow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <section ref={sectionRef} className="apply bg-[#023769] py-14 px-4">
        <div className="container mx-auto">
          <div className="section-head my-4">
            <h5 className="text-[#009E99] text-xl">Need Advice?</h5>
            <h2 style={{ color: "#fff" }}>Send Us A Message</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <form
              action=""
              className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="apply-input">
                <input
                  id="field-1"
                  name="field-1"
                  type="text"
                  autoComplete="off"
                  placeholder="Name"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div className="apply-input">
                <input
                  id="field-2"
                  name="Email"
                  type="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div className="apply-input">
                <input
                  id="field-3"
                  name="Phone"
                  type="contact"
                  autoComplete="off"
                  placeholder="Phone"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div className="apply-input">
                <input
                  id="field-4"
                  name="field-4"
                  type="text"
                  autoComplete="off"
                  placeholder="City"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
              <div className="apply-input">
                <select
                  id="field-5"
                  name="field-5"
                  type="text"
                  autoComplete="off"
                  placeholder="Field 5"
                  className="block w-full rounded-md bg-white px-3 py-4 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                >
                  <option value="option1">Select country</option>
                  <option value="option1">UK</option>
                  <option value="option2">Autralia</option>
                  <option value="option3">Canada</option>
                  <option value="option3">Finland</option>
                  <option value="option3">Turkey</option>
                  <option value="option3">Cyprus</option>
                </select>
              </div>
              <div className="apply-input">
                <div className="submit-btn">
                  <button
                    type="button"
                    className=" px-6 py-3 site-button text-white text-lg font-medium rounded w-full"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ApplyNow;
