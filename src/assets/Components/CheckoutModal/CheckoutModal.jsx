import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import SuccessConfetti from '../SuccessConfetti/SuccessConfetti'
import './CheckoutModal.css'

const CheckoutModal = ({ isOpen, onClose, car }) => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showValidationErrors, setShowValidationErrors] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // ✅ Updated to call Netlify Function
  const sendToTelegram = async (data, carInfo) => {
    const message =
      `<b>🧾 YANGI SOTIB OLISH SO'ROVI</b>\n\n` +
      `🚘 <b>Avtomobil ma'lumotlari</b>\n` +
      `• Model: ${carInfo?.title || 'BYD'}\n` +
      `• Tur: ${carInfo?.type || 'Elektr'}\n` +
      `• Narx: ${carInfo?.prices && carInfo.prices.length > 0 ? `${carInfo.prices[0].value} ${t('uzs')}` : t('N/A')}\n\n` +
      `👤 <b>Mijoz ma'lumotlari</b>\n` +
      `• Ism: ${data.name}\n` +
      `• Telefon: ${data.phone}\n` +
      `• Manzil: ${data.address || 'Belgilanmagan'}\n\n` +
      `📝 <b>Qo'shimcha izohlar</b>\n` +
      `${data.notes || "Izoh yo'q"}\n\n` +
      `📅 <b>So'rov vaqti</b>: ${new Date().toLocaleString('uz-UZ')}\n` +
      `🎯 <b>Harakat</b>: Mijoz bilan bog'lanib, sotib olish jarayonini boshlang.`

    try {
      console.log('Sending to Telegram via Netlify Function')

      // 🚀 Call serverless function directly (no localhost)
      const response = await fetch('/api/telegram/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, parseMode: 'HTML' })
      })

      const result = await response.json()
      console.log('Telegram backend response:', result)

      if (response.ok && result.ok) {
        return { success: true }
      } else {
        throw new Error(result.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Telegram send error:', error)
      return { success: false, error: error.message }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error')
      setShowValidationErrors(true)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setShowValidationErrors(false)

    try {
      const result = await sendToTelegram(formData, car)
      
      if (result.success) {
        setSubmitStatus('success')
        setShowConfetti(true)
        setTimeout(() => {
          onClose()
          setFormData({ name: '', phone: '', address: '', notes: '' })
          setSubmitStatus(null)
          setShowConfetti(false)
        }, 3000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{t('checkoutTitle')}</h2>
          <button className="modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* Car Info */}
          {car && (
            <div className="car-summary">
              <img src={car.img} alt={car.title} className="car-summary-image" />
              <div className="car-summary-details">
                <h3 className="car-title">{car.title}</h3>
                <div className="car-details">
                  <span className="car-type">{t(car.type?.toLowerCase() || 'electric')}</span>
                  {car.prices && car.prices.length > 0 && (
                    <span className="car-price">{car.prices[0].value} {t('uzs')}</span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h4 className="section-title">{t('personalInfo')}</h4>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">{t('fullName')} *</label>
                  <input type="text" id="name" name="name" value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${(showValidationErrors && !formData.name) ? 'invalid' : ''}`}
                    placeholder={t('fullNamePlaceholder')}
                    required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">{t('phoneNumber')} *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${(showValidationErrors && !formData.phone) ? 'invalid' : ''}`}
                    placeholder="+998 __ ___ __ __"
                    required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">{t('address')}</label>
                <input type="text" id="address" name="address" value={formData.address}
                  onChange={handleInputChange} className="form-input"
                  placeholder={t('addressPlaceholder')} />
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label htmlFor="notes" className="form-label">{t('additionalNotes')}</label>
                <textarea id="notes" name="notes" value={formData.notes}
                  onChange={handleInputChange} className="form-textarea"
                  placeholder={t('notesPlaceholder')} rows="3" />
              </div>
            </div>

            {submitStatus === 'error' && <div className="status-message error">{t('submitError')}</div>}
            {submitStatus === 'success' && <div className="status-message success">{t('purchaseSuccess')}</div>}

            <div className="modal-actions">
              <button type="button" onClick={onClose} className="btn btn-secondary" disabled={isSubmitting}>
                {t('cancel')}
              </button>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? (<><span className="loading-spinner"></span>{t('submitting')}</>) : t('submitPurchase')}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Confetti Animation */}
      <SuccessConfetti isVisible={showConfetti} onComplete={() => setShowConfetti(false)} />
    </div>
  )
}

export default CheckoutModal