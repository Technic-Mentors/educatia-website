'use client';
import React from 'react';
import Hero from '../../app/Components/Hero';
import Services from '../../app/Components/Services';
import About from '../../app/Components/About';
import Destinations from '../../app/Components/Destinations';
import ApplyNow from '../../app/Components/ApplyNow';
import Testimonials from '../../app/Components/Testimonials';
import WorkProcess from '../../app/Components/WorkProcess';
import Universities from '../../app/Components/Universities';

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Destinations />
      <WorkProcess />
      <ApplyNow />
      <Universities />
      <Testimonials />
    </>
  )
}

export default LandingPage
