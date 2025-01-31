"use client";
import { useState } from 'react';
import { FaHandsHelping, FaNetworkWired, FaThumbsUp, FaUserCheck } from "react-icons/fa";

function WhyEducatia() {

    const [openAccordion, setOpenAccordion] = useState(0);

    const toggleAccordion = (index) => {
      setOpenAccordion(openAccordion === index ? null : index);
    };
 
  return (
    <>
      <section className="why-educatia py-20">
      <div className="container justify-center align-center mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold text-[#023769]">
            Setting the Standard for <span className="text-black"> Study Abroad</span> Guidance
            </h2>
            <p className="font-heading text-base text-black mt-4">
            Choosing Educatia means partnering with a consultancy that truly understands the value of global education. We don’t just offer services; we provide a transformative experience tailored to your academic and career aspirations. Our dedicated team of experts ensures you receive personalized advice and comprehensive support at every step of your study abroad journey.<br /><br />
            From selecting the right university to preparing your application and navigating the visa process, we handle it all with precision and care. With a proven track record of successful placements and strong partnerships with leading institutions, we empower students to pursue their dreams and unlock global opportunities confidently. At Educatia, your success is our top priority.
            </p>
            <button className="button2 mt-8">
              Book Appointment
            </button>
          </div>
          <div className="col-span-1">
            <div className="accordion-group">
              {[
                {
                  icon: <FaUserCheck />,
                  title: 'Personalized Guidance',
                  content: 'We understand that every student’s journey is unique. Our experts provide tailored advice, helping you make informed decisions that align with your academic and career goals.',
                },
                {
                  icon: <FaNetworkWired />,
                  title: 'Extensive University Network',
                  content: 'With partnerships across top universities worldwide, we offer you a wide range of academic options, ensuring you find the perfect fit for your future aspirations.',
                },
                {
                  icon: <FaHandsHelping />,
                  title: 'End-to-End Application Support',
                  content: 'From preparing documents to submitting your applications and tracking responses, we handle everything to ensure a hassle-free process from start to finish.',
                },
                {
                  icon: <FaThumbsUp />,
                  title: 'Proven Success Record',
                  content: 'Our success stories are a testament to our expertise. We have helped countless students achieve their dream of studying abroad with trusted and dedicated support.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`accordion shadow-md border border-solid transform hover:-translate-y-2 border-gray-300 p-6 rounded-xl mb-4 transition duration-500 ${
                    openAccordion === index ? 'bg-indigo-50 border-indigo-600' : ''
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="accordion-toggle group inline-flex items-center justify-between text-left text-base leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
                    aria-expanded={openAccordion === index}
                  >
                    <h4 className="text-lg font-semibold flex items-center">{item.icon}&nbsp;{item.title}</h4>
                    <svg
                      className={`w-6 h-6 transition-transform duration-500 ${
                        openAccordion === index ? 'rotate-45' : 'rotate-0'
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18M12 18V6"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  {openAccordion === index && (
                    <div className="accordion-content w-full overflow-hidden pr-4 mt-4">
                      <p className="text-base text-gray-900 leading-6">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default WhyEducatia;
