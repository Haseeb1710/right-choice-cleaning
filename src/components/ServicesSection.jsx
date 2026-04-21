import { useEffect, useRef } from 'react'
import './ServicesSection.css'

const services = [
  {
    icon: 'fa-house',
    title: 'Residential Cleaning',
    desc: 'From initial deep cleans to regular recurring visits, we keep your home spotless and fresh every single time.',
    features: ['Initial Deep Cleans', 'Recurring Cleans', 'Post-Construction Cleans'],
    href: '#booking',
    badge: 'Most Popular',
  },
  {
    icon: 'fa-building',
    title: 'Office Cleaning',
    desc: 'Professional small office cleaning services tailored to your schedule, ensuring a healthy and productive workspace.',
    features: ['Initial Cleans', 'Recurring Cleans', 'Weekend Availability'],
    href: '#booking',
    badge: null,
  },
  {
    icon: 'fa-key',
    title: 'Property Management',
    desc: 'Specialized cleaning for landlords and property managers — move in/out, vacation rentals, and listing cleans.',
    features: ['Move In/Out Cleans', 'Vacation Rental Cleans', 'Listing Cleans'],
    href: '#booking',
    badge: null,
  },
  {
    icon: 'fa-broom',
    title: 'Deep Cleaning',
    desc: 'A thorough, top-to-bottom clean for homes that need extra attention. Perfect before a big event or seasonal refresh.',
    features: ['Kitchen Deep Clean', 'Bathroom Sanitisation', 'Inside Appliances'],
    href: '#booking',
    badge: 'Recommended First Clean',
  },
]

export default function ServicesSection() {
  const cardsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    cardsRef.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="services" className="services-section bg-off-white">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Our <span>Cleaning Services</span></h2>
          <div className="gold-line"></div>
          <p className="section-sub">
            Select from our range of professional cleaning services tailored to your property type and needs.
          </p>
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <div
              key={i}
              className={`service-card card fade-up fade-up-delay-${i + 1}`}
              ref={el => cardsRef.current[i] = el}
            >
              {svc.badge && <div className="service-badge">{svc.badge}</div>}
              <div className="service-icon-wrap">
                <div className="service-icon">
                  <i className={`fa-solid ${svc.icon}`}></i>
                </div>
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <ul className="service-features">
                {svc.features.map((f, j) => (
                  <li key={j}><i className="fa-solid fa-check"></i> {f}</li>
                ))}
              </ul>
              <a href={svc.href} className="btn btn-gold service-btn">
                <span>Book This Service</span>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
