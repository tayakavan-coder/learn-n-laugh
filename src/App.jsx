import { useRef } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import WhyChooseUs  from './components/WhyChooseUs'
import Teachers     from './components/Teachers'
import Facilities   from './components/Facilities'
import Gallery      from './components/Gallery'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Admissions   from './components/Admissions'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  const admRef = useRef(null)
  const scrollToAdmissions = () =>
    admRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
      <Navbar  onAdmit={scrollToAdmissions} />
      <Hero    onAdmit={scrollToAdmissions} />
      <About />
      <WhyChooseUs />
      <Teachers />
      <Facilities />
      <Gallery />
      <Achievements />
      <Testimonials />
      <Admissions ref={admRef} />
      <Contact />
      <Footer />
    </>
  )
}
