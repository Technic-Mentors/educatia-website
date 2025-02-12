"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function Sidebar() {

    const services = [
        {id: "career-counselling", name: "Career Counselling"},
        {id: 'university-selection', name: 'University Selection'},
        {id: 'scholarships', name: 'Scholarships'},
        {id: 'application-handling', name: 'Application Handling'},
        {id: 'interview-preparation', name: 'Interview Preparation'},
        {id: 'pre-departure-briefing', name: 'Pre-Departure Briefing'}
    ]

    const router = useRouter()
  return (
    <>
    <section className='page-head'>
      <div className='head-overlay py-36 '>
      <div className='container mx-auto justify-center align-center'>
        <div className='grid grid-cols-1 '>
          <div className='col-span-1'>
            <h1 className='text-4xl font-bold text-center text-white'>Expert Services For Global Education</h1>
          </div>
        </div>
      </div>
      </div>
    </section>
    <section className="all-details">
      <div className="container px-8">
        <div className="flex">
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
      <div className="detaildiv">

      </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Sidebar
