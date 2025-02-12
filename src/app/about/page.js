"use client"
import React from 'react'
import About from '../../Components/About';
import WhyEducatia from '../../Components/WhyEducatia';
import CoreValues from '@/Components/CoreValues';
import Testimonials from '@/Components/Testimonials';
import Calltoaction from '@/Components/Calltoaction';

function about() { 
  return (
    <>
    <section className='page-head'>
      <div className='head-overlay py-36 '>
      <div className='container mx-auto justify-center align-center'>
        <div className='grid grid-cols-1 '>
          <div className='col-span-1'>
            <h1 className='text-4xl font-bold text-center text-white'>About Us</h1>
          </div>
        </div>
      </div>
      </div>
    </section>
    <About />
    <CoreValues />
    <WhyEducatia />
    <Testimonials />
    <Calltoaction />
   
    </>
  )
}

export default about
