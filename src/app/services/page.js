import Link from "next/link";
import servicesData from "../../data/serviceDetails.json";
import Help from "../../data/howwehelp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBriefcase, FaComments, FaFileAlt, FaMoneyCheckAlt, FaPlaneDeparture, FaUserGraduate } from "react-icons/fa";
import Calltoaction from "@/Components/Calltoaction";

const iconMapping = {
  "fa fa-user": <FaBriefcase />,
  "fa fa-university": <FaUserGraduate />,
  "fa fa-money": <FaMoneyCheckAlt />,
  "fa fa-file-text": <FaFileAlt />,
  "fa fa-plane": <FaPlaneDeparture />,
  "fa fa-comments": <FaComments />,
};

const ServicesPage = () => {
  return (
    <>
      <section className="page-head ">
        <div className="head-overlay py-36 ">
          <div className="container mx-auto justify-center align-center">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <h1 className="text-4xl font-bold text-center text-white">
                  Expert Services For Global Education
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f8f8]">
  <div className="container py-12 mx-auto justify-center items-center">
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Link Column - Full width on mobile, 1/3 on larger screens */}
      <div className="flex flex-col w-full lg:w-1/4 group  lg:px-6 px-3 p-6">
        {servicesData.services.map((service) => (
          <Link
            key={service.id}
            className="mb-4 shadow-md flex items-center bg-white p-4 rounded-lg transform transition-transform duration-300 hover:translate-x-3"
            href={`/services/${service.id}`}
          >
            <span className="text-xl text-[#009E99]">
              {iconMapping[service.icon]}
            </span>
            <span className="text-[#023769] w-full px-4 py-2 font-bold hover:text-[#009E99] text-sm">
              {service.tabTitle}
            </span>
          </Link>
        ))}
      </div>

      {/* Content Column - Full width on mobile, 3/4 on larger screens */}
      <div className="w-full lg:w-4/5 px-4 lg:px-0">
        <h2 className="capitalize text-4xl/10 w-full lg:w-3/4 mb-6 font-bold pt-3 text-[#023769]">
          Comprehensive Solutions for Your{" "}
          <span className="text-black">Study Abroad</span> Goals
        </h2>
        <p className="text-base/6">
          Navigating the path to studying abroad can be complex, but with
          Educatia Study Abroad Consultants, you're never alone. We offer
          a wide range of expert services designed to simplify your
          journey and help you achieve your academic dreams with
          confidence. <br />
          From personalized career counseling to application handling and
          interview preparation, we provide everything you need to ensure
          a seamless transition to your chosen destination. Our
          comprehensive approach ensures that you are guided at every
          critical step, making your study abroad experience as rewarding
          as possible.
        </p>
        <div className="how-we-help py-3">
          <h2 className="capitalize text-2xl/10 w-full lg:w-3/4 mb-6 font-bold pt-3 text-[#023769]">
            How We Help You Succeed In Your Study Abroad Journey
          </h2>
          <p>
            At Educatia, we believe in a comprehensive approach to studying abroad. Our services are designed to guide you through each step of the process, ensuring that you not only reach your destination but also thrive once you get there. Here's how we support you every step of the way:
          </p>
          <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            {Help.map((item, ind) => (
              <div className="flex relative group" key={ind}>
                <div className="shadow-lg w-full my-3 gap-6 group-hover:shadow-xl rounded-lg p-4 bg-white relative overflow-hidden">
                  <span className="flex items-center justify-center text-white text-xl rounded-full bg-[#009E99] p-3 w-10 h-10">
                    {item.icon}
                  </span>
                  <h3 className="text-xl my-3 group-hover:text-[#009E99]">{item.title}</h3>
                  <p>{item.description}</p>
                  
                  {/* Pseudo element using Tailwind */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#009E99] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="container justify-center items-center py-8 mx-auto">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="flex">
                <div className="service-cta">
                  <h2 className="text-[#023769] my-5 text-2xl font-bold">Let's Make It Happen!</h2>
                  <p>Your academic journey deserves expert guidance. Whether you need help choosing the right university, securing scholarships, or navigating complex visa processes — we're here for you. Let's make your dream of studying abroad a reality, together.</p>
                  <p className="text-xl my-3">Don't wait. Let us help you start your journey today!</p>
                  <button className="button2">Get Expert Guidance &rarr;</button>
                </div>
              </div>
              <div className="consult-img my-4">
                <Image src="/Assets/home-images/free-consult.avif" alt="free-consultation" width={400} height={400} className="rounded"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<Calltoaction />
    </>
  );
};

export default ServicesPage;
