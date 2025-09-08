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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // For desktop expand/collapse (if desired later)
  const [isMobileOpen, setIsMobileOpen] = useState(false) // For mobile open/close
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
      href: "https://yandex.uz/maps/org/92414484048/?ll=69.456601%2C41.391577&z=14.29" 
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
    { code: 'uz', label: 'O\'zbekcha', flag: '🇺🇿' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
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
            : 'desktop-open' // Always open on desktop for now
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
                      <span className="menu-label mobile-visible-text">{item.label}</span>
                    </button>
                  ) : (
                    <a href={item.href} className="menu-item" target="_blank" rel="noopener noreferrer">
                      <div className="menu-icon">
                        {item.icon}
                      </div>
                      <span className="menu-label mobile-visible-text">{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>

        {/* Promotional Hook */}
        <div className="promo-hook">
          <div className="promo-card">
            <div className="promo-info">
              <span className="promo-eyebrow">Special Offer</span>
              <div className="promo-text">{t('promoText')}</div>
            </div>
            <div className="promo-cta">
              <button className="promo-btn" onClick={onTestDriveClick}>
                <span className="promo-btn-label">{t('testDrive')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="phone-number">
            <img className="phone-icon" src={CallIcon} alt="Phone" />
            <a href={`tel:${t('companyPhoneNumber')}`}>{t('companyPhoneNumber')}</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
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
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="language-section">
          <div className={`language-selector ${isLanguageOpen ? 'open' : ''}`}>
            <div className="current-language" onClick={toggleLanguage} aria-expanded={isLanguageOpen}>
              <span className="language-flag">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </span>
              <span className="language-name mobile-visible-text">
                {languages.find(lang => lang.code === currentLanguage)?.label}
              </span>
            </div>
            
            <div className="language-dropdown">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                  onClick={() => { changeLanguage(lang.code); setIsLanguageOpen(false); }}
                >
                  <span className="language-flag">{lang.flag}</span>
                  <span className="language-label mobile-visible-text">{lang.label}</span>
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