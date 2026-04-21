import { useState } from 'react'
import './ContactSection.css'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production this form is replaced by Go High Level embed
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact-section bg-navy-gradient">
      {/* Top wave */}
      <div className="wave-divider wave-top">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="var(--off-white)" d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="container">
        <div className="section-header text-center">
          <span className="section-label" style={{ color: 'var(--gold)' }}>Get In Touch</span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            Contact <span>Us Today</span>
          </h2>
          <div className="gold-line"></div>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Have a question or want a custom quote? We're here to help!
          </p>
        </div>

        <div className="contact-inner">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem' }}>
                <i className="fa-solid fa-building" style={{ color: 'var(--gold)', marginRight: '0.5rem' }}></i>
                Right Choice Cleaning
              </h3>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <div className="info-label">Phone</div>
                  <a href="tel:+15873552116" className="info-value">(587)-355-2116</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <div className="info-label">Email</div>
                  <a href="mailto:info@rightchoicecleaning.ca" className="info-value">
                    info@rightchoicecleaning.ca
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-clock"></i></div>
                <div>
                  <div className="info-label">Office Hours</div>
                  <div className="info-value">Mon – Sat: 8am – 8pm</div>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <div className="info-label">Address</div>
                  <div className="info-value">310 Cranford Dr SE<br />Calgary, AB T3M 1N1</div>
                </div>
              </div>

              <div className="social-links">
                <a href="#" aria-label="Facebook" className="social-btn"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram" className="social-btn"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" aria-label="Google" className="social-btn"><i className="fa-brands fa-google"></i></a>
              </div>
            </div>
          </div>

          {/* Form (GHL embed placeholder) */}
          <div className="contact-form-wrap">
            {/* =====================================================
                GO HIGH LEVEL (GHL) INTEGRATION
                =====================================================
                Replace the form below with your Go High Level form embed.

                Steps:
                  1. Log in to your GHL sub-account at app.gohighlevel.com
                  2. Go to Sites → Funnels OR Forms → Choose your form
                  3. Click Embed → Copy the iframe or script code
                  4. Paste it below in place of the placeholder div

                For the GHL Chat Widget:
                  1. In GHL → Settings → Chat Widget
                  2. Copy the <script> snippet
                  3. Paste it in index.html before </body>

                Example iframe:
                  <iframe src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID" ... />
            ===================================================== */}
            <div className="ghl-placeholder contact-placeholder">
              <i className="fa-solid fa-comment-dots contact-placeholder-icon"></i>
              <h3>Go High Level Form</h3>
              <p>
                Replace this with your Go High Level contact form embed.<br />
                GHL Dashboard → Sites → Forms → Embed Code.
              </p>
            </div>

            {/* FALLBACK FORM — Remove once GHL is connected */}
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name" type="text" placeholder="John Smith" required
                      value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email" type="email" placeholder="john@example.com" required
                      value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone" type="tel" placeholder="+44 123 456 7890"
                    value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" rows="4" placeholder="Tell us about your cleaning needs..." required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  <i className="fa-solid fa-paper-plane"></i>
                  <span>Send Message</span>
                </button>
              </form>
            ) : (
              <div className="form-success">
                <i className="fa-solid fa-circle-check"></i>
                <h3>Message Sent!</h3>
                <p>Thank you! We'll get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="wave-divider wave-bottom">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="var(--navy)" d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
