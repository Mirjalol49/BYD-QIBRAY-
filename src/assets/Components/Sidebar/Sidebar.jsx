/* stylelint-disable */
import { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import Logo from "../../Images/logo.png"
import InstagramIcon from "../../Images/instagram.svg"
import FacebookIcon from "../../Images/facebook.svg"
import TelegramIcon from "../../Images/telegram.svg"
import LocationIcon from "../../Images/location.svg"
import CarIcon from "../../Images/car.svg"
import CallIcon from "../../Images/call.svg"
import "./Sidebar.css"

const Sidebar = ({ isMobile, onTestDriveClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const { currentLanguage, changeLanguage, t } = useLanguage()

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const toggleMenuItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const toggleLanguage = () => {
    setIsLanguageOpen(prev => !prev)
  }

  const menuItems = [
    { 
      id: 'location',
      icon: (<img src={LocationIcon} alt="Location icon" />), 
      label: t('location'), 
      href: "https://maps.app.goo.gl/3YsgAwRTRTYKyEqH7" 
    },
    { 
      id: 'testdrive',
      icon: (<img src={CarIcon} alt="Car icon" />), 
      label: t('testDrive'), 
      href: "#testdrive" 
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bydqibray/',
      iconSrc: InstagramIcon
    },
    {
      name: 'Telegram',
      url: 'https://t.me/bydqibray',
      iconSrc: TelegramIcon
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/257421954110605',
      iconSrc: FacebookIcon
    }
  ]

  const languages = [
    { code: 'uz', label: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
  ]

  const phoneNumbers = [
    { number: t('companyPhoneNumber'), primary: false },
    { number: t('companySecondPhoneNumber'), primary: true },
  ]

  return (
    <>
      {/* Mobile Hamburger Button */}
      {isMobile && (
        <button
          className={`mobile-hamburger ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobileSidebar}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      {/* Sidebar */}
      <div className={`professional-sidebar ${
        isMobile
          ? (isMobileOpen ? 'mobile-open' : 'mobile-closed')
          : 'desktop-open'
      }`}>
        
        {/* Header with Logo and Brand */}
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="brand-icon">
              <img src={Logo} alt="BYD Logo" />
            </div>
            <span className="brand-name">BYD QIBRAY</span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="menu-section">
          <nav className="menu-items">
            {menuItems.map((item) => (
              <div key={item.id} className="menu-item-wrapper">
                {item.id === 'testdrive' ? (
                  <button 
                    onClick={onTestDriveClick} 
                    className="menu-item menu-button"
                  >
                    <div className="menu-icon">
                      {item.icon}
                    </div>
                    <span className="menu-label">{item.label}</span>
                  </button>
                ) : (
                  <a href={item.href} className="menu-item" target="_blank" rel="noopener noreferrer">
                    <div className="menu-icon">
                      {item.icon}
                    </div>
                    <span className="menu-label">{item.label}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-header">
            <img className="contact-header-icon" src={CallIcon} alt="Contact" />
            <span className="contact-title">{t('contactUs')}</span>
          </div>
          <div className="phone-numbers">
            {phoneNumbers.map((phone, index) => (
              <div key={index} className={`phone-number ${phone.primary ? 'primary' : 'secondary'}`}>
                <a href={`tel:${phone.number.replace(/\s/g, '')}`}>
                  {phone.number}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <div className="social-header">
            <span className="social-title">{t('followUs')}</span>
          </div>
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <div className="social-icon">
                  <img src={social.iconSrc} alt={`${social.name} icon`} />
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Language Switcher */}
        <div className="language-section">
          <div className={`language-selector ${isLanguageOpen ? 'open' : ''}`}>
            <div className="current-language" onClick={toggleLanguage} aria-expanded={isLanguageOpen}>
              <span className="language-flag">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </span>
              <span className="language-name">
                {languages.find(lang => lang.code === currentLanguage)?.label}
              </span>
              <span className="language-arrow">▼</span>
            </div>
            
            <div className="language-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => { changeLanguage(lang.code); setIsLanguageOpen(false); }}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-label">{lang.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div className="mobile-overlay" onClick={toggleMobileSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;