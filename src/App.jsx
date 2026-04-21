import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingSection from './components/BookingSection'
import ServicesSection from './components/ServicesSection'
import ServicesChecklist from './components/ServicesChecklist'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import TestimonialsSection from './components/TestimonialsSection'
import ServiceAreas from './components/ServiceAreas'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

// Scroll-triggered reveal wrapper (from ShineExperts)
function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <ScrollReveal><BookingSection /></ScrollReveal>
            <ScrollReveal delay={0.05}><ServicesSection /></ScrollReveal>
            <ScrollReveal delay={0.05}><ServicesChecklist /></ScrollReveal>
            <ScrollReveal delay={0.05}><WhyChooseUs /></ScrollReveal>
            <HowItWorks />
            <ScrollReveal delay={0.05}><TestimonialsSection /></ScrollReveal>
            <ScrollReveal delay={0.05}><ServiceAreas /></ScrollReveal>
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
