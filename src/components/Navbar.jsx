import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Checklist', href: '#checklist' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Static centering wrapper — Framer Motion only handles Y + opacity */}
      <div className="navbar-wrapper">
        <motion.nav
          className={`navbar ${scrolled ? 'scrolled' : ''}`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <a href="#home" className="navbar-logo">
            <img src="/logo.png" alt="Right Choice Cleaning" className="navbar-logo-img" />
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Book Now CTA */}
          <div className="navbar-cta">
            <a href="#booking" className="btn btn-gold" id="navbar-book-btn">
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Now</span>
            </a>
          </div>

          {/* Hamburger for mobile */}
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </motion.nav>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          >
            <div className="mobile-menu-header">
              <img src="/logo.png" alt="Right Choice Cleaning" className="mobile-logo-img" />
              <button className="mobile-close" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <ul>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu-footer">
              <a href="tel:+15873552116" className="mobile-phone">
                <i className="fa-solid fa-phone"></i> (587)-355-2116
              </a>
              <a href="#booking" className="btn btn-gold" onClick={() => setMenuOpen(false)}>
                <i className="fa-solid fa-calendar-check"></i>
                <span>Book Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
