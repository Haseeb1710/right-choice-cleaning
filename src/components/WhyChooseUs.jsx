import { useEffect, useRef } from 'react'
import './WhyChooseUs.css'

const reasons = [
  { icon: 'fa-star', title: '5-Star Service', desc: 'Consistently rated 5 stars by our clients for quality, reliability, and attention to detail.' },
  { icon: 'fa-shield-halved', title: 'Fully Licensed & Insured', desc: 'Complete peace of mind — we are fully insured and licensed to operate in your area.' },
  { icon: 'fa-leaf', title: 'Eco-Friendly Products', desc: 'We use safe, environmentally friendly cleaning products that are tough on dirt but gentle on your family.' },
  { icon: 'fa-user-tie', title: 'Vetted Professionals', desc: 'All our cleaning technicians are background-checked, trained, and experienced professionals.' },
  { icon: 'fa-rotate-left', title: 'Satisfaction Guarantee', desc: "Not happy? We'll come back and re-clean for free. Your satisfaction is our absolute priority." },
  { icon: 'fa-house-chimney', title: 'Locally Owned', desc: 'We\'re a family-owned local business that genuinely cares about our community and clients.' },
]

export default function WhyChooseUs() {
  const itemsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    itemsRef.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="why-us" className="why-section">
      <div className="container">
        <div className="why-inner">
          {/* Left text */}
          <div className="why-left">
            <span className="section-label">Why Right Choice?</span>
            <h2 className="section-title">
              The Right Choice for<br /><span>Your Property</span>
            </h2>
            <div className="gold-line left"></div>
            <p style={{ marginBottom: '2rem', color: 'var(--gray-600)' }}>
              We don't just clean — we deliver a premium 5-star experience every single visit. 
              Trusted by homeowners, landlords, and businesses across the area.
            </p>
            <div className="why-cta-group">
              <a href="#booking" className="btn btn-gold">
                <span>Book a Clean Today</span>
                <i className="fa-solid fa-calendar-check"></i>
              </a>
              <a href="tel:+441234567890" className="btn btn-navy">
                <i className="fa-solid fa-phone"></i>
                <span>Call Us</span>
              </a>
            </div>
          </div>

          {/* Right grid */}
          <div className="why-grid">
            {reasons.map((r, i) => (
              <div
                key={i}
                className={`why-card fade-up fade-up-delay-${(i % 3) + 1}`}
                ref={el => itemsRef.current[i] = el}
              >
                <div className="why-icon">
                  <i className={`fa-solid ${r.icon}`}></i>
                </div>
                <div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
