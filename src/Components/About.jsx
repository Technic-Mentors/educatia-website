import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <section className="about-us">
  <div className="about-overlay">
    <div className="container mx-auto px-4 py-14">
      {/* Title Section */}
      <div className="w-full text-center mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#023769] font-bold mb-4">
          Empowering <span className="text-black">Dreams</span>, Inspiring Global <span className="text-black">Success</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-2xl">
          We don’t just guide you to study abroad—we help you build a brighter, globally connected future. 
          Trust us to turn your aspirations into achievements.
        </p>
      </div>

      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        
        <div className="w-full flex justify-center items-center">
          <Image
            src="/Assets/home-images/about-img.avif"
            alt="overseas-education-consultants-introduction"
            className="rounded-lg "
            height={300}
            width={450}
          />
        </div>

        {/* Text Section */}
        <div className="about-text px-4 md:px-8">
          <h2 className="text-xl sm:text-2xl text-[#023769] lg:text-3xl font-bold mb-4">
            Your Journey, Our Expertise
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            At Educatia, we understand that studying abroad is more than just an academic decision—it’s a life-changing experience. 
            That’s why our dedicated team works closely with you to create a customized pathway to success.
            <br /><br />
            With years of expertise and a passion for helping students thrive, we simplify every step of your journey. 
            From selecting the right university to pre-departure preparations, we’re here to ensure your experience is smooth, 
            fulfilling, and transformative.
            <br /><br />
            By partnering with top institutions and leveraging our industry expertise, we provide insights that empower you to 
            make informed decisions. With Educatia you’re not just planning to study abroad—you’re shaping a future full of possibilities.
          </p>
          <button
            type="button"
            className="mt-6 button2 border-1-[#009E99]"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default About;
