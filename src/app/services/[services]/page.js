'use client'
import ServicesLayout from '../../../Components/ServicesLayout';
import serviceDetails from '../../../servicedata/serviceDetails.json'


function servicePage() {
   

    const serviceData = serviceDetails.services.find((s) => s.id === service);

  return (
    <>
    <section className='page-head'>
      <div className='head-overlay py-36 '>
      <div className='container mx-auto justify-center align-center'>
        <div className='grid grid-cols-1 '>
          <div className='col-span-1'>
            <h1 className='text-4xl font-bold text-center text-white'>Expert Services for Global Education</h1>
          </div>
        </div>
      </div>
      </div>
    </section>
    <div className="w-1/4">
      <ul>
        {services.map((service) => (
          <li key={service.id} className="cursor-pointer">
            <Link href={`/services/${service.id}`}>
            <span>{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      </div>
      <ServicesLayout>
      <h1 className="text-2xl font-bold capitalize">{serviceData?.title}</h1>
      <p>{serviceData?.description}</p>
      </ServicesLayout>
    </>
  )
}

export default servicePage
