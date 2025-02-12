import Link from 'next/link';
import servicesData from '@/data/serviceDetails.json';



const ServiceDetail = ({params}) => {
  const {id} = params;

  const service = servicesData.services.find((service) => service.id === id);

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Service not found</h1>
      </div>
    );
  }

  return (
    <>
    <section className='page-head'>
      <div className='head-overlay py-36 '>
      <div className='container mx-auto justify-center align-center'>
        <div className='grid grid-cols-1 '>
          <div className='col-span-1'>
            <h1 className='text-4xl font-bold text-center text-white'>{service.tabTitle}</h1>
          </div>
        </div>
      </div>
      </div>
    </section>
      {/* Sidebar */}
      <div className='flex'>
      <div className="w-1/4 p-4">
        <h2 className="text-xl font-bold mb-4">Services</h2>
        <ul>
          {servicesData.services.map((service) => (
            <li key={service.id} className="mb-2">
              <Link
                href={`/services/${service.id}`}
                className="text-blue-500 hover:text-blue-700"
              >
                {service.tabTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">{service.title}</h1>
        <p className="mb-4">{service.description}</p>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Overview</h2>
          <p>{service.details.overview}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Benefits</h2>
          <ul className="list-disc list-inside">
            {service.details.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Process</h2>
          <ul className="list-disc list-inside">
            {service.details.process.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default ServiceDetail;