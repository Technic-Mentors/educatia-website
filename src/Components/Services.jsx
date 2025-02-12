import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaAngleDoubleRight, FaUserFriends } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const serviceRef = useRef(null);

  useEffect(() => {
    const elements = serviceRef.current.querySelectorAll(".educatia-service");

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: serviceRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse", // Re-run the animation when re-entered
        },
      }
    );
  }, []);

  const serviceItems = [
    {
      icon: FaUserFriends,
      title: "Career Counseling",
      description:
        "Receive personalized guidance to explore your interests, identify your strengths, and choose the right career path tailored to your goals.",
      url: "/services/career-counseling",
    },
    {
      icon: FaUserFriends,
      title: "Selection of University",
      description:
        "We help you research and select the perfect university that aligns with your academic ambitions and preferred destination.",
      url: "/services/selection-of-university",
    },
    {
      icon: FaUserFriends,
      title: "Scholarships",
      description:
        "Discover and apply for the best scholarships to make studying abroad more affordable, with our expert assistance.",
      url: "/services/scholarships",
    },
    {
      icon: FaUserFriends,
      title: "Application Handling",
      description:
        "Let us handle the complexities of your university application process, ensuring accuracy and timely submissions.",
      url: "/services/application-handling",
    },
    {
      icon: FaUserFriends,
      title: "Interview Preparation",
      description:
        "Prepare to excel in university or visa interviews with one-on-one coaching and detailed practice sessions.",
      url: "/services/interview-preparation",
    },
    {
      icon: FaUserFriends,
      title: "Pre-Departure Briefing",
      description:
        "Get ready for your study abroad journey with essential pre-departure tips, cultural insights, and travel guidance.",
      url: "/services/pre-departure-briefing",
    },
  ];

  return (
    <>
      <section className="services py-16" ref={serviceRef}>
        <div className="container items-center mx-auto w-full justify-center px-5">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 w-3/3 justify-center items-center mx-auto">
            <div className="section-head text-center mb-8">
              <h2 className="mb-4">
                Expert <span className="text-black">Study Abroad</span> Services
                for Your Global Journey
              </h2>
              <p>
                Discover a range of tailored services designed to simplify your
                study abroad journey. From university selection to visa
                guidance, we’re here to turn your dreams into reality.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-y-10 gap-8">
            {serviceItems.map((item, ind) => (
              <div className="educatia-service" key={ind}>
                <Link href={item.url}>
                  <div
                    className={
                      ind === 0
                        ? "card serv-cards cursor-pointer hover:text-white bg-[#023769] text-white p-10 shadow-md"
                        : "card serv-cards hover:text-white p-10 shadow-md"
                    }
                  >
                    <div
                      className={
                        ind === 0
                          ? "mb-3 rounded-full icon-div p-3 w-fit bg-white"
                          : "mb-3 rounded-full p-3 w-fit bg-[#023769] icon-div"
                      }
                    >
                      <FaUserFriends
                        className={
                          ind === 0
                            ? "text-3xl text-[#023769] edu-serv-icon"
                            : "text-3xl text-white edu-serv-icon"
                        }
                      />
                    </div>
                    <h3
                      className={
                        ind === 0
                          ? "text-2xl text-dark font-semibold"
                          : "text-2xl text-dark font-semibold"
                      }
                    >
                      {item.title}
                    </h3>
                    <hr
                      className={
                        ind === 0
                          ? "w-36 my-4 border-t-2 serv-rule border-white"
                          : "w-36 my-4 border-t-2 border-[#023769] serv-rule"
                      }
                    />
                    <p>{item.description}</p>
                    <div className="mt-3">
                      <button
                        type="button"
                        className={
                          ind === 0
                            ? "bg-transparent flex flex-row items-center gap-2"
                            : "bg-transparent flex flex-row items-center gap-2"
                        }
                      >
                        Read More{" "}
                        <span>
                          <FaAngleDoubleRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
