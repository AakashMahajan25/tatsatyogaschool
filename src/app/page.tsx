import AboutUs from '@/components/home/AboutUs'
import Contact from '@/components/home/Contact'
import Gallery from '@/components/home/Gallery'
import Hero from '@/components/home/Hero'
import Programs from '@/components/home/Programs'
import Schedule from '@/components/home/Schedule'
import Testimonials from '@/components/home/Testimonials'
import MarqCarousel from '@/components/home/MarqCarousel'
import Faq from '@/components/home/FAQ'
import OurClasses from '@/components/home/OurClasses'


import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <MarqCarousel />
      <AboutUs />
      <Gallery />
      <Programs />
      <Schedule />
      <Testimonials />
      <Faq />
      <Contact />
      <OurClasses />
    </div>
  )
}

export default Home
