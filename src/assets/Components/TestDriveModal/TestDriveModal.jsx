import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLanguage } from '../../../context/LanguageContext'
import SuccessConfetti from '../SuccessConfetti/SuccessConfetti'
import './TestDriveModal.css'

const TestDriveModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null, // Change to null for DatePicker
    time: '' // Re-add time for separate selection
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

  const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      date: date
    }))
  }

  const sendToTelegram = async (data) => {
    const message =
      `<b>🚗 TEST DRIVE SO'ROVI</b>\n\n` +
      `👤 <b>Mijoz ma'lumotlari</b>\n` +
      `• Ism: ${data.name}\n` +
      `• Telefon: ${data.phone}\n` +
      `• Sana: ${data.date}\n` +
      `• Vaqt: ${data.time}\n\n` +
      `📅 <b>So'rov vaqti</b>: ${new Date().toLocaleString('uz-UZ')}\n` +
      `🎯 <b>Harakat</b>: Test drive uchun mijoz bilan bog'laning.`

    try {
      console.log('Sending to Telegram via backend')

      const backendApiUrl = import.meta.env.VITE_BACKEND_API_URL || '';
      const response = await fetch(`${backendApiUrl}/api/telegram/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          parseMode: 'HTML'
        })
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
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setSubmitStatus('error')
      setShowValidationErrors(true) // Show validation errors
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    setShowValidationErrors(false) // Hide validation errors on successful submission attempt

    try {
      const result = await sendToTelegram({
        ...formData,
        date: formData.date ? formData.date.toLocaleDateString('uz-UZ') : '' // Format date for Telegram
      })
      
      if (result.success) {
        setSubmitStatus('success')
        setShowConfetti(true)
        setTimeout(() => {
          onClose()
          setFormData({ name: '', phone: '', date: null, time: '' })
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

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0) // Set default time to 09:00 for minDate
    return tomorrow // Return Date object for DatePicker
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="test-drive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            {t('testDriveTitle')}
          </h2>
          <button className="modal-close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-description">{t('testDriveDescription')}</p>
          
          <form onSubmit={handleSubmit} className="test-drive-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                {t('fullName')}
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
                {t('phoneNumber')}
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

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  {t('preferredDate')}
                </label>
                <DatePicker
                  id="date"
                  name="date"
                  selected={formData.date}
                  onChange={handleDateChange}
                  className={`form-input ${(showValidationErrors && !formData.date) ? 'invalid' : ''}`}
                  placeholderText={t('selectDate')}
                  dateFormat="MM/dd/yyyy"
                  minDate={getTomorrowDate()}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time" className="form-label">
                  {t('preferredTime')}
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={`form-input ${(showValidationErrors && !formData.time) ? 'invalid' : ''}`}
                  required
                >
                  <option value="">{t('selectTime')}</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
              </div>
            </div>

            {submitStatus === 'error' && (
              <div className="status-message error">
                <span className="status-icon" aria-hidden="true"></span>
                {t('submitError')}
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon" aria-hidden="true"></span>
                {t('submitSuccess')}
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
                    {t('scheduleTestDrive')}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Success Confetti Animation */}
      <SuccessConfetti 
        isVisible={showConfetti} 
        onComplete={() => setShowConfetti(false)}
      />
    </div>
  )
}

export default TestDriveModal
