import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import Categories from '@/components/sections/Categories'
import FeaturedCourse from '@/components/sections/FeaturedCourse'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonial from '@/components/sections/Testimonial'
import People from '@/components/sections/People'
import Contact from '@/components/sections/Contact'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonial />
        <People />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </>
  )
}
