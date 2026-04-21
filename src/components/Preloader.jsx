import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Preloader.css'

const DUST_COUNT = 20

export default function Preloader({ setLoading }) {
  const [count, setCount] = useState(0)

  const dustParticles = useMemo(() =>
    Array.from({ length: DUST_COUNT }).map((_, i) => ({
      id: i,
      x: (i / (DUST_COUNT - 1)) * 100,
      y: Math.random() * 30 - 15,
      size: Math.random() * 5 + 2,
    })), []
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 700)
          return 100
        }
        return prev + 1
      })
    }, 28)
    return () => clearInterval(timer)
  }, [setLoading])

  return (
    <motion.div
      className="preloader"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* Floating gold rings */}
      <div className="preloader-rings">
        <motion.div className="ring ring-1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.div className="ring ring-2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
        />
      </div>

      {/* Logo */}
      <motion.div
        className="preloader-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src="/logo.png" alt="Right Choice Cleaning" />
      </motion.div>

      {/* Cleaning track */}
      <div className="cleaning-track">
        {/* Dirt spots */}
        {dustParticles.map(dust => (
          <motion.div
            key={dust.id}
            className="dirt-spot"
            style={{
              left: `${dust.x}%`,
              top: `calc(50% + ${dust.y}px)`,
              width: dust.size,
              height: dust.size,
            }}
            animate={{
              scale: count >= dust.x ? 0 : 1,
              opacity: count >= dust.x ? 0 : 0.4,
              x: count >= dust.x ? -10 : 0,
              transition: { duration: 0.2 }
            }}
          />
        ))}

        {/* Cloth assembly */}
        <motion.div
          className="cloth-assembly"
          style={{ left: `${count}%` }}
        >
          {/* Sparkle effect left behind */}
          <motion.div
            className="sparkle-effect"
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 90, 180] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
          >
            <i className="fa-solid fa-star"></i>
          </motion.div>
          {/* Cloth */}
          <motion.div 
            className="cleaning-cloth"
            animate={{ rotate: [-5, 5, -5], y: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 0.4 }}
          >
            <div className="cloth-fold" />
          </motion.div>
        </motion.div>
      </div>

      {/* Progress text */}
      <div className="preloader-label">
        CLEANING IN PROGRESS... <span>{count}%</span>
      </div>

      {/* Background floating icons */}
      <div className="preloader-bg-icons">
        {['fa-broom', 'fa-droplet', 'fa-spray-can-sparkles', 'fa-star'].map((icon, i) => (
          <motion.div
            key={i}
            className={`bg-icon bg-icon-${i + 1}`}
            animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            <i className={`fa-solid ${icon}`}></i>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
