import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
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

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const sendToTelegram = async (data, carInfo) => {
    const botToken = '8378416167:AAGB5aQB0S0ddcsX1mzCvSxmCYEjKrvlYvA'
    // Use your personal chat ID or group chat ID instead of channel username
    const chatId = '1907166652' // Replace with your actual chat ID
    
    const message = `💰 *YANGI SOTIB OLISH SO'ROVI*

🚗 *Avtomobil ma'lumotlari:*
▫️ Model: ${carInfo?.title || 'BYD'}
▫️ Tur: ${carInfo?.type || 'Elektr'}
▫️ Narx: ${carInfo?.prices && carInfo.prices.length > 0 ? `${carInfo.prices[0].value} ${t('uzs')}` : t('N/A')}

👤 *Mijoz ma'lumotlari:*
▫️ Ism: ${data.name}
▫️ Telefon: ${data.phone}
▫️ Manzil: ${data.address || 'Belgilanmagan'}

📝 *Qo'shimcha izohlar:*
${data.notes || 'Izoh yo\'q'}

📅 *So'rov vaqti:* ${new Date().toLocaleString('uz-UZ')}

🎯 *Harakat:* Mijoz bilan bog'lanib, sotib olish jarayonini boshlang!`

    try {
      console.log('Sending to Telegram:', { chatId, message }) // Debug log
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      })

      const result = await response.json()
      console.log('Telegram API Response:', result) // Debug log

      if (response.ok && result.ok) {
        return { success: true }
      } else {
        throw new Error(result.description || 'Failed to send message')
      }
    } catch (error) {
      console.error('Telegram API Error:', error)
      return { success: false, error: error.message }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.phone) {
      setSubmitStatus('error')
      setShowValidationErrors(true) // Show validation errors
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setShowValidationErrors(false) // Hide validation errors on successful submission attempt

    try {
      const result = await sendToTelegram(formData, car)
      
      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setFormData({
            name: '', phone: '', address: '', notes: ''
          })
          setSubmitStatus(null)
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
          <h2 className="modal-title">
            <span className="modal-icon">💰</span>
            {t('checkoutTitle')}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
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

          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h4 className="section-title">
                <span className="section-icon">👤</span>
                {t('personalInfo')}
              </h4>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    {t('fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${(showValidationErrors && !formData.name) ? 'invalid' : ''}`}
                    placeholder={t('fullNamePlaceholder')}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    {t('phoneNumber')} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${(showValidationErrors && !formData.phone) ? 'invalid' : ''}`}
                    placeholder="+998 __ ___ __ __"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  {t('address')}
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={t('addressPlaceholder')}
                />
              </div>
            </div>

            {/* Payment section removed as requested */}

            <div className="form-section">
              <div className="form-group">
                <label htmlFor="notes" className="form-label">
                  <span className="label-icon">📝</span>
                  {t('additionalNotes')}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={t('notesPlaceholder')}
                  rows="3"
                />
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="status-message error">
                <span className="status-icon">❌</span>
                {t('submitError')}
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
                {t('purchaseSuccess')}
              </div>
            )}

            <div className="modal-actions">
              <button
                type="button"
                onClick={onClose}
                className="btn btn-secondary"
                disabled={isSubmitting}
              >
                {t('cancel')}
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    {t('submitting')}
                  </>
                ) : (
                  <>
                    <span className="btn-icon">💰</span>
                    {t('submitPurchase')}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CheckoutModal
