import { motion } from 'framer-motion'
import './Hero.css'

const stats = [
  { icon: 'fa-star', value: '4.8★', label: '205 Google Reviews' },
  { icon: 'fa-users', value: '500+', label: 'Happy Clients' },
  { icon: 'fa-shield-halved', value: '100%', label: 'Insured & Licensed' },
  { icon: 'fa-clock', value: '24/7', label: 'Support' },
]

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background video (cleaning ambience) */}
      <video
        className="hero-video"
        autoPlay loop muted playsInline
        poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
      >
        <source src="https://somervilles.s3-assets.com/Somerville-Hero-Homepage.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlays */}
      <div className="hero-overlay" />
      <div className="hero-overlay-radial" />

      {/* Animated particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="container hero-content">
        <motion.div
          className="hero-text"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="badge hero-badge">
            <i className="fa-solid fa-star"></i>
            <span>Calgary's 5-Star Professional Cleaning Service</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={fadeUp}>
            We Clean.<br />
            <span className="gold-text">You Relax.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp} className="hero-sub">
            Premium residential, office & property cleaning services in Calgary, AB.
            Licensed, insured, and trusted by hundreds of happy clients.
            Claim your <strong>$50 welcome voucher</strong> when you book online!
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="hero-buttons">
            <a href="#booking" className="btn btn-gold" id="hero-book-btn">
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Online — Get $50 Off</span>
            </a>
            <a href="tel:+15873552116" className="btn btn-outline" id="hero-call-btn">
              <i className="fa-solid fa-phone"></i>
              <span>Call (587)-355-2116</span>
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.div variants={fadeUp} className="hero-trust">
            {['Fully Insured', 'Eco-Friendly Products', 'Satisfaction Guarantee'].map((t, i) => (
              <div key={i} className="trust-item">
                <i className="fa-solid fa-circle-check"></i>
                <span>{t}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        className="hero-stats"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-icon">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <div className="stat-info">
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
