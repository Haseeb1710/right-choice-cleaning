import { useEffect, useRef } from 'react'
import './HowItWorks.css'

const steps = [
  {
    step: '01',
    icon: 'fa-calendar-days',
    title: 'Book Online',
    desc: 'Choose your service, pick a date & time that works for you, and complete your booking in minutes — 100% online.',
  },
  {
    step: '02',
    icon: 'fa-user-check',
    title: 'We Show Up',
    desc: 'Your vetted, professional cleaning technician arrives on time with all the equipment and eco-friendly supplies needed.',
  },
  {
    step: '03',
    icon: 'fa-star',
    title: 'Enjoy a Spotless Home',
    desc: 'Relax while we handle everything. We clean to the highest standard — and follow up to make sure you\'re delighted.',
  },
]

export default function HowItWorks() {
  const stepsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    stepsRef.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="how-section bg-navy-gradient">
      {/* Top wave */}
      <div className="wave-divider wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="var(--off-white)" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container">
        <div className="section-header text-center" style={{ color: 'var(--white)' }}>
          <span className="section-label">Simple Process</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            How It <span>Works</span>
          </h2>
          <div className="gold-line"></div>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Getting a professional clean has never been easier. Three simple steps to a spotless space.
          </p>
        </div>

        <div className="how-steps">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`how-step fade-up fade-up-delay-${i + 1}`}
              ref={el => stepsRef.current[i] = el}
            >
              <div className="step-number">{s.step}</div>
              <div className="step-icon-wrap">
                <div className="step-icon">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
              <h3 style={{ color: 'var(--white)' }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="how-cta text-center">
          <a href="#booking" className="btn btn-gold" id="how-book-btn">
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Your First Clean</span>
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="var(--off-white)" d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
