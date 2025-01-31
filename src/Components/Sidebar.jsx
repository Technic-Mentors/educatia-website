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
    </>
  )
}

export default Sidebar
