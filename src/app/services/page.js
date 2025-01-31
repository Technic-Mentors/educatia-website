'use client'
import ServicesLayout from '@/Components/ServicesLayout'
import React from 'react'

function page() {
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

    
    <ServicesLayout>
      <h1>Welcome to Our Services</h1>
      <p>Select a service from the sidebar to learn more.</p>
    </ServicesLayout>
    </>
  )
}

export default page
