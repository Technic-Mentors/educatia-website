import React from "react";
import {
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
} from "react-icons/fa";

function page() {
  return (
    <>
      <section className="page-head">
        <div className="head-overlay py-36 ">
          <div className="container mx-auto justify-center align-center">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <h6 className="text-4xl font-bold text-center text-white">
                  Let's Plan Your Study Abroad Journey
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-8 mx-auto justify-center items-center">
          <div className="grid sm:grid-cols-2  items-center gap-12 p-8 mx-auto lg:px-10 bg-white font-[sans-serif]">
            <div className="border-r-0 lg:border-r border-[#023769] border-spacing-0">
              <h1 className="text-gray-800 text-3xl font-bold">Let's Talk</h1>
              <p className="text-sm text-black mt-4">
                Have any query? Our support team is 24/7 ready for you. Let's
                schedule your meeting or send us a message here and we will get
                back to you.
              </p>

              <div className="mt-8 h-full">
                <div className="p-4 shadow-md">
                  <div className="flex items-center">
                    <span className="bg-[#023769] mr-2 p-3 rounded-full text-white">
                      {" "}
                      <FaMapMarkerAlt />{" "}
                    </span>
                    <h2 className="text-gray-800 text-2xl font-semibold">
                      Location
                    </h2>
                  </div>
                  <p className="mt-4 text-lg">
                    148, Mumtaz Market, G.T. Road Gujranwala, Punjab, Pakistan
                  </p>
                </div>
                <div className="p-4 mt-6 shadow-md">
                  <div className="flex items-center">
                    <span className="bg-[#023769] mr-2 p-3 rounded-full text-white">
                      {" "}
                      <FaPhone />{" "}
                    </span>
                    <h2 className="text-gray-800 text-2xl font-semibold">
                      Contact Number
                    </h2>
                  </div>
                  <p className="mt-4 text-lg">+923 111 122 144</p>
                </div>
                <div className="p-4 mt-6 shadow-md">
                  <div className="flex items-center">
                    <span className="bg-[#023769] mr-2 p-3 rounded-full text-white">
                      {" "}
                      <FaPaperPlane />{" "}
                    </span>
                    <h2 className="text-gray-800 text-2xl font-semibold">
                      Email
                    </h2>
                  </div>
                  <p className="mt-4 text-lg">info@educatia.pk</p>
                </div>
              </div>
            </div>
            <div className="h-full">
              <div className="py-4">
                <h4 className="mb-3 text-2xl font-semibold">
                  Send your message
                </h4>
                <p>Let's hear from you!</p>
              </div>
              <form className="ml-auto space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-gray-800  py-4 px-4 border border-[#999] text-sm outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-gray-800  py-4 px-4  border border-[#999]  text-sm outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full text-gray-800  py-4 px-4 border border-[#999] text-sm outline-none focus:border-blue-500"
                />
                <select
                  id="field-5"
                  name="field-5"
                  type="text"
                  autoComplete="off"
                  placeholder="Field 5"
                  className="block w-full border border-[#999] bg-white py-4 text-base text-gray-900    focus:outline focus:outline-2 focus:-outline-offset-2 focus:border-blue-500 sm:text-sm"
                >
                  <option value="option1">Select country</option>
                  <option value="option1">UK</option>
                  <option value="option2">Autralia</option>
                  <option value="option3">Canada</option>
                  <option value="option4">Finland</option>
                  <option value="option5">Turkey</option>
                  <option value="option6">Cyprus</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full text-gray-800  px-4 border border-[#999] text-sm pt-2.5 outline-none focus:border-blue-500"
                ></textarea>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="text-white button2 rounded-md text-sm px-4 py-3 justify-center !mt-6"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
