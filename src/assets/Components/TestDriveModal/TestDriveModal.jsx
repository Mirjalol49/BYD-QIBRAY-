import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useLanguage } from '../../../context/LanguageContext'
import './TestDriveModal.css'

const TestDriveModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: null, // Change to null for DatePicker
    time: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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
    const botToken = '8378416167:AAGB5aQB0S0ddcsX1mzCvSxmCYEjKrvlYvA'
    // Use your personal chat ID or group chat ID instead of channel username
    const chatId = '1234567890' // Replace with your actual chat ID
    
    const message = `🚗 *TEST DRIVE SO'ROVI*

👤 *Mijoz ma'lumotlari:*
▫️ Ism: ${data.name}
▫️ Telefon: ${data.phone}
▫️ Sana: ${data.date}
▫️ Vaqt: ${data.time}

📅 *So'rov vaqti:* ${new Date().toLocaleString('uz-UZ')}

🎯 *Harakat:* Test drive uchun mijoz bilan bog'laning!`

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
    
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendToTelegram({
        ...formData,
        date: formData.date ? formData.date.toISOString().split('T')[0] : '' // Format date for Telegram
      })
      
      if (result.success) {
        setSubmitStatus('success')
        setTimeout(() => {
          onClose()
          setFormData({ name: '', phone: '', date: null, time: '' })
          setSubmitStatus(null)
        }, 2000)
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
    return tomorrow // Return Date object for DatePicker
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="test-drive-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">
            <span className="modal-icon">🚗</span>
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
                <span className="label-icon">👤</span>
                {t('fullName')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder={t('fullNamePlaceholder')}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                <span className="label-icon">📱</span>
                {t('phoneNumber')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-input"
                placeholder="+998 __ ___ __ __"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date" className="form-label">
                  <span className="label-icon">📅</span>
                  {t('preferredDate')}
                </label>
                <DatePicker
                  id="date"
                  name="date"
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="form-input"
                  placeholderText={t('selectDate')}
                  dateFormat="yyyy/MM/dd"
                  minDate={getTomorrowDate()}
                  required
                  calendarClassName="react-datepicker-custom"
                  dayClassName={() => "react-datepicker-day-custom"}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time" className="form-label">
                  <span className="label-icon">⏰</span>
                  {t('preferredTime')}
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="form-input"
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
                <span className="status-icon">❌</span>
                {t('submitError')}
              </div>
            )}

            {submitStatus === 'success' && (
              <div className="status-message success">
                <span className="status-icon">✅</span>
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
                    <span className="btn-icon">🚗</span>
                    {t('scheduleTestDrive')}
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

export default TestDriveModal
