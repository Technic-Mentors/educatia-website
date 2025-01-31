import React from "react";
import { FaBrain, FaEye, FaGavel, FaHandHoldingHeart, FaHandshake, FaHeart, FaLightbulb, FaTrophy, FaUserCog } from "react-icons/fa";

function CoreValues() {

    const values = [
        {icon: <FaHandshake />, title: "Integrity", description: "We believe in honest and transparent communication, ensuring you are always fully informed."},
        {icon: <FaLightbulb />, title: "Expertise", description: "With years of experience, our team guides you toward the best educational opportunities available."},
        {icon: <FaUserCog />, title: "Personalized Approach", description: "We offer customized services that align with your unique academic and career goals."},
        {icon: <FaHandHoldingHeart />, title: "Commitment", description: "We are committed to your success, providing continuous support throughout your entire journey."},
        {icon: <FaEye />, title: "Transparency", description: "We deliver clear and straightforward advice with no hidden fees or unexpected surprises."},
        {icon: <FaHandshake />, title: "Collaboration", description: "We collaborate with students, families, and universities to ensure the best possible outcomes."},
        {icon: <FaTrophy />, title: "Excellence", description: "We strive for excellence in every aspect, ensuring high-quality service and optimal results."},
        {icon: <FaHeart />, title: "Empathy", description: "We understand the challenges of studying abroad and offer compassionate guidance to support you."},
    ]

  return (
    <>
      <section className="py-16 bg-[#f5f5f5]">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-14 text-center">
      <h2 className="text-4xl text-center font-bold text-[#023769] py-5">
        Principles That Drive Us
      </h2>
      <p className="text-lg font-normal text-black max-w-md md:max-w-2xl mx-auto">
      our core values shape everything we do. We are dedicated to offering a transparent, supportive, and personalized experience to help you succeed in your study abroad goals.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((val, ind) => (
        <div className="relative w-full text-center group hover:shadow-md p-6 hover:bg-white transition-all rounded-xl" key={ind}>
          <div className="bg-indigo-50 text-[#009E99] rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600 ">
            <span className="stroke-indigo-600 transition-all duration-500 group-hover:text-white text-4xl">
              {val.icon}
            </span>
          </div>
          <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
            {val.title}
          </h4>
          <p className="text-sm font-normal text-gray-500">{val.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default CoreValues;
