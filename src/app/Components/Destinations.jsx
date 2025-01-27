import Image from "next/image";
import React from "react";

function Destinations() {
  const destinations = [
    {
      name: "UK",
      img: "/Assets/home-images/destination-uk.avif",
      alt: "study-in-uk",
    },
    {
      name: "Australia",
      img: "/Assets/home-images/study-in-australia.avif",
      alt: "study-in-australia",
    },
    {
      name: "Canada",
      img: "/Assets/home-images/study-in-canada.avif",
      alt: "study-in-canada",
    },
    {
      name: "Finland",
      img: "/Assets/home-images/study-in-finland.avif",
      alt: "study-in-finland",
    },
    {
      name: "Turkey",
      img: "/Assets/home-images/study-in-turkey.avif",
      alt: "study-in-turkey",
    },
    {
      name: "Cyprus",
      img: "/Assets/home-images/study-in-cyprus.avif",
      alt: "study-in-cyprus",
    },
  ];

  return (
    <>
      <section className="destinations py-8">
        <div className="container mx-auto w-full justify-center items-center">
          <div className="section-head text-center my-5">
            <h2>
              Explore Your Path to{" "}
              <span className="text-black"> Global Opportunities</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-center items-center px-10 gap-6">
  {destinations.map((dest, ind) => (
    <div className="dest-img relative group" key={ind}>
      <div className="w-full h-[300px]"> {/* Fixed height for consistent size */}
        <Image
          src={dest.img}
          alt={dest.alt}
          height={400} // Fixed height
          width={400}  // Fixed width
          className="transition-transform duration-500 object-cover w-full h-full group-hover:scale-105"
        />
      </div>
      <span className="absolute bottom-8 left-8 rounded text-xl font-bold items-center justify-center text-center w-2/4 bg-white text-[#023769] p-3 hover:bg-opacity-75  group-hover:opacity-100  ">
        {dest.name}
      </span>
    </div>
  ))}
</div>


          <div className="text-center w-full justify-center">
            <button
              type="button"
              className="mt-7 px-6 py-3 site-button text-white text-lg font-medium rounded-full w-fit"
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destinations;
