'use client';
import React from 'react';
import Hero from "../Components/Hero";
import Services from '../Components/Services';
import About from '../Components/About';
import Destinations from '../Components/Destinations';
import ApplyNow from '../Components/ApplyNow';
import Testimonials from '../Components/Testimonials';
import WorkProcess from '../Components/WorkProcess';
import Universities from '../Components/Universities';
import Calltoaction from '@/Components/Calltoaction';

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
      <Calltoaction />
    </>
  )
}

export default LandingPage
