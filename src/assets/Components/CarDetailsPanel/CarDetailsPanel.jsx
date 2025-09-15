import React from 'react'
import BackIcon from '../../Images/back.svg'
import { useLanguage } from '../../../context/LanguageContext'
import './CarDetailsPanel.css'

const CarDetailsPanel = ({ car, isOpen, onClose, onBuyClick }) => {
  const { t } = useLanguage()
  
  if (!car) return null

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="car-details-overlay" onClick={onClose}></div>
      )}
      
      {/* Details Panel */}
      <div className={`car-details-panel ${isOpen ? 'open' : 'closed'}`}>
        {/* Back Button */}
        <button className="back-button" onClick={onClose} aria-label="Back to cars">
          <img src={BackIcon} alt="Back" />
        </button>
        
        {/* Car Image */}
        <div className="car-details-image-container">
          <img src={car.img} alt={car.title} className="car-details-image" />
        </div>

        {/* Car Info */}
        <div className="car-details-content">
          {/* Header with Title and Type */}
          <div className="car-details-header">
            <div className="car-title-section">
              <h2 className="car-details-title">{car.title}</h2>
              <span className="car-details-type">{t(car.type.toLowerCase())}</span>
            </div>
            <div className="car-price-section">
              {car.prices && car.prices.length > 0 ? (
                car.prices.map((priceItem, index) => (
                  <div key={index} className="price-item">
                    <span className="price-value">
                      {t(priceItem.range)} - {priceItem.value} {t('uzs')}
                    </span>
                  </div>
                ))
              ) : (
                <span className="price-value">{car.price || '68,900'} {t('uzs')}</span>
              )}
              <span className="price-period">/ {t('purchase')}</span>
            </div>
          </div>

          {/* Car Specifications Grid */}
          <div className="car-specifications">
            <div className="spec-row">
              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('range')}:</span>
                  <span className="spec-value">{car.range || '396 mi'}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('acceleration')}:</span>
                  <span className="spec-value">{car.acceleration || '1.99 s'}</span>
                </div>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('fuelConsumption')}:</span>
                  <span className="spec-value">{car.fuelConsumption || 'N/A'}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('chargingTime')}:</span>
                  <span className="spec-value">{car.chargingTime || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('topSpeed')}:</span>
                  <span className="spec-value">{car.topSpeed || '200 mph'}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('electronicAssistants')}:</span>
                  <span className="spec-value">{car.electronicAssistants || 'N/A'}</span>
                </div>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('engine')}:</span>
                  <span className="spec-value">{car.type === 'Electric' ? t('electricMotor') : t('hybridSystem')}</span>
                </div>
              </div>

              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('seating')}:</span>
                  <span className="spec-value">{t('fivePassengers')}</span>
                </div>
              </div>
            </div>

            <div className="spec-row">
              <div className="spec-item">
                <div className="spec-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z"/>
                  </svg>
                </div>
                <div className="spec-content">
                  <span className="spec-label">{t('transmission')}:</span>
                  <span className="spec-value">{t('automatic')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="car-description">
            <p>{car.description || `${car.title} ${t('descriptionFallback')}`}</p>
          </div>

          {/* Action Buttons */}
          <div className="car-actions">
            <div className="phone-numbers">
              <div className="phone-number">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href={`tel:${t('companyPhoneNumber')}`}>{t('companyPhoneNumber')}</a>
              </div>
              <div className="phone-number">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href={`tel:${t('companySecondPhoneNumber')}`}>{t('companySecondPhoneNumber')}</a>
              </div>
            </div>
            <button className="buy-button" onClick={() => onBuyClick(car)}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              {t('buyButton')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CarDetailsPanel
