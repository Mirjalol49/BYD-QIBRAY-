import React from 'react'
import { useLanguage } from '../../../context/LanguageContext'

import "./CarProduct.css"
const CarProduct = ({ car, isSelected, onDetailsClick }) => {
  const { t } = useLanguage()
  
  return (
    
      <div className={`car-wrapper ${isSelected ? 'selected' : ''}`}>
<img className='car-img' src={car.img} alt={car.title} />
        <div className='car-content'>
          <div className='car-content-wrapper'>
          <h2 className='car-content-title'>{car.title}</h2>
          <p className='car-content-type'>{t(car.type.toLowerCase())}</p>
         </div>
          <button className={`car-content-btn ${isSelected ? 'active' : ''}`} onClick={onDetailsClick}>
            {isSelected ? t('viewingButton') : t('detailsButton')}
          </button>
        </div>
      </div>
    
  )
}

export default CarProduct
