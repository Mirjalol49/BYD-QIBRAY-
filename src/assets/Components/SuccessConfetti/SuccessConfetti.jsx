import React, { useEffect, useState } from 'react'
import './SuccessConfetti.css'

const SuccessConfetti = ({ isVisible, onComplete }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (isVisible) {
      // Create confetti particles
      const newParticles = []
      const colors = ['#4f73b3', '#3d5a8f', '#22c55e', '#16a34a', '#f59e0b', '#ef4444']
      
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          left: Math.random() * 100,
          animationDelay: Math.random() * 3,
          animationDuration: 3 + Math.random() * 2,
          size: 4 + Math.random() * 4,
          shape: Math.random() > 0.5 ? 'circle' : 'square'
        })
      }
      
      setParticles(newParticles)
      
      // Auto-complete after animation
      const timer = setTimeout(() => {
        onComplete && onComplete()
      }, 4000)
      
      return () => clearTimeout(timer)
    } else {
      setParticles([])
    }
  }, [isVisible, onComplete])

  if (!isVisible) return null

  return (
    <div className="success-confetti-container">
      {/* Success Icon */}
      <div className="success-icon-wrapper">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="success-ripple"></div>
        <div className="success-ripple success-ripple-delay"></div>
      </div>
      
      {/* Confetti Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`confetti-particle confetti-${particle.shape}`}
          style={{
            left: `${particle.left}%`,
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`
          }}
        />
      ))}
      
      {/* Success Message */}
      <div className="success-message">
        <h3>Muvaffaqiyatli yuborildi!</h3>
        <p>Tez orada siz bilan bog'lanamiz</p>
      </div>
    </div>
  )
}

export default SuccessConfetti
