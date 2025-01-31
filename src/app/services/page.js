import Link from 'next/link';
import servicesData from '../../data/serviceDetails.json'; 

const ServicesPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="flex space-x-4">
        {servicesData.services.map((service) => (
          <Link key={service.id} href={`/services/${service.id}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              {service.tabTitle}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;