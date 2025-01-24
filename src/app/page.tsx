import AboutUs from '@/components/home/AboutUs'
import Contact from '@/components/home/Contact'
import Hero from '@/components/home/Hero'
import Testimonials from '@/components/home/Testimonials'
import Faq from '@/components/home/FAQ'
import OurClasses from '@/components/home/OurClasses'

import Benefits from '@/components/home/Benefits'
import YogaRetreat from '@/components/home/YogaRetreat'
import Form from "@/components/home/Form"

import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      {/* <MarqCarousel /> */}
      <AboutUs />
      <Benefits />
      <OurClasses />
      <YogaRetreat />
      {/* <Courses /> */}
      {/* <Gallery /> */}
      {/* <Programs /> */}
      
      {/* <Schedule /> */}
      <Testimonials />
      <Form />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home
