import React, { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import './Header.css'

const Header = ({ onFilterChange, activeFilter }) => {
  const { t } = useLanguage()

  const filterOptions = [
    { key: 'all', label: t('allCars') },
    { key: 'electric', label: t('electric') },
    { key: 'hybrid', label: t('hybrid') }
  ]

  return (
    <div className="header-container">
      <div className="header-content">
        <h1 className="header-title">{t('findPerfectCar')}</h1>
        
        <div className="filter-buttons">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              className={`filter-btn ${activeFilter === option.key ? 'active' : ''}`}
              onClick={() => onFilterChange(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
