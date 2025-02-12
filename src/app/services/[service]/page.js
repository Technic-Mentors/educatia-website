import Link from "next/link";
import serviceDetails from "../../../data/serviceDetails.json";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaBriefcase,
  FaComments,
  FaFileAlt,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaPlaneDeparture,
  FaRegLightbulb,
  FaUserGraduate,
} from "react-icons/fa";
import Image from "next/image";
import Calltoaction from "@/Components/Calltoaction";

const iconMapping = {
  "fa fa-user": <FaBriefcase />,
  "fa fa-university": <FaUserGraduate />,
  "fa fa-money": <FaMoneyCheckAlt />,
  "fa fa-file-text": <FaFileAlt />,
  "fa fa-plane": <FaPlaneDeparture />,
  "fa fa-comments": <FaComments />,
  "fa fa-lightbulb": <FaRegLightbulb />,
};

// Static params generation for dynamic pages
export async function generateStaticParams() {
  return serviceDetails.services.map((service) => ({
    service: service.id, // Params based on each service ID
  }));
}

function ServicePage({ params }) {
  // Access the service data based on the service ID from the URL
  const serviceData = serviceDetails.services.find(
    (s) => s.id === params.service
  );

  return (
    <>
      <section className="page-head">
        <div className="head-overlay py-36 ">
          <div className="container mx-auto justify-center align-center">
            <div className="grid grid-cols-1 ">
              <div className="col-span-1">
                <h1 className="text-4xl font-bold text-center text-white">
                  {serviceData.tabTitle}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="serv-page-detail bg-[#f8f8f8]">
        <div className="container py-8 mx-auto justify-center items-center">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Link Column - Full width on mobile, 1/3 on larger screens */}
            <div className="flex flex-col w-full lg:w-1/4 px-6 p-6">
              {serviceDetails.services.map((service) => (
                <Link
                  href={`/services/${service.id}`}
                  key={service.id}
                  className="mb-4 shadow-md p-4 flex bg-white items-center rounded-lg transform transition-transform duration-300 hover:translate-x-3"
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

            {/* Content Column - Full width on mobile, 2/3 on larger screens */}
            <div className="w-full lg:w-4/5 px-4 detail-div">
              <h1 className="text-2xl font-bold mb-4">{serviceData.title}</h1>
              <p className="mb-4">{serviceData.description}</p>
              <div className="mb-4">

                <div className="container justify-center items-center py-8 mx-auto">
                  <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex">
                      <div className="service-cta">
                        <h2 className=" my-5 text-2xl font-bold">
                          {serviceData.details.customhead}
                        </h2>
                        <p>{serviceData.details.why}</p>
                      </div>
                    </div>
                    <div className="consult-img my-4">
                      <Image
                        src={serviceData.details.customImg}
                        alt="free-consultation"
                        width={400}
                        height={400}
                        className="rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                  {serviceData.details.cards.map((itm, ind) => (
                    <div className="flex relative group" key={ind}>
                      <div className="shadow-lg w-full my-3 gap-6 group-hover:shadow-xl rounded-lg p-4 bg-white relative overflow-hidden">
                        <span className="flex items-center justify-center text-white text-xl rounded-full bg-[#009E99] p-3 w-10 h-10">
                          {iconMapping[itm.icon]}
                        </span>
                        <h3 className="text-xl my-3 group-hover:text-[#009E99]">
                          {itm.title}
                        </h3>
                        <p>{itm.paragraph}</p>

                        {/* Pseudo element using Tailwind */}
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#009E99] transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>
                  ))}
                </div>

                  <div>
                  <h2 className="my-5 text-2xl font-bold">{serviceData.details.accordMain} </h2>
                  </div>
                  <div className="grid lg:grid-cols-3 gap-4 my-5 sm:grid-cols-1 mb-4 group">
                    {serviceData.details.servAccord.map((acc, idx) => (
                    <div key={idx} className="w-full hover:shadow-lg rounded-lg bg-white shadow-md border-b border-2-[#009E99] p-6 mb-4">
                      <h5 className="mb-3 font-bold hover:text-[#009E99]">{acc.accordTitle}</h5>
                      <p>{acc.accordText}</p>
                    </div>
                    ))} 
                  </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <Calltoaction />
    </>
  );
}

export default ServicePage;
