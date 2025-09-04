
import { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext'
import Logo from "../../Images/logo.png"
import "./Sidebar.css"

const Sidebar = ({ isMobile, onTestDriveClick }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState({})
  const { currentLanguage, changeLanguage, t } = useLanguage()

  const toggleExpanded = () => {
    if (!isMobile) {
      setIsExpanded(!isExpanded)
    }
  }

  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  const toggleMenuItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const menuItems = [
    { 
      id: 'location',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ), 
      label: t('location'), 
      href: "#location" 
    },
    { 
      id: 'testdrive',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ), 
      label: t('testDrive'), 
      href: "#testdrive" 
    }
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bydqibray/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/257421954110605',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      url: 'https://t.me/bydqibray',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      )
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
          onClick={toggleMobile}
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
            : (isExpanded ? 'expanded' : 'collapsed')
        }`}>
          
          {/* Header with Logo and Brand */}
          <div className="sidebar-header">
            <div className="sidebar-brand">
              <div className="brand-icon">
                <img src={Logo} alt="BYD Logo" />
              </div>
              {(isExpanded || isMobile) && (
                <span className="brand-name">BYD Motors</span>
              )}
            </div>
            {!isMobile && (
              <button className="sidebar-toggle" onClick={toggleExpanded}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
              </button>
            )}
          </div>

          {/* Menu Items */}
          {(isExpanded || isMobile) && (
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
                      <a href={item.href} className="menu-item">
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
          )}

        {/* Promotional Hook */}
        {(isExpanded || isMobile) && (
          <div className="promo-hook">
            <div className="promo-text">
              {t('promoText')}
            </div>
          </div>
        )}

        {/* Contact Information */}
        {(isExpanded || isMobile) && (
          <div className="contact-info">
            <div className="phone-number">
              <svg className="phone-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              <a href="tel:+998559008808">+998 55 900 88 08</a>
            </div>
          </div>
        )}

        {/* Social Media Links */}
        {(isExpanded || isMobile) && (
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
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* Language Switcher */}
        <div className="language-section">
          <div className="language-selector">
            <div className="current-language" onClick={toggleExpanded}>
              <span className="language-flag">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </span>
              {(isExpanded || isMobile) && (
                <span className="language-name">
                  {languages.find(lang => lang.code === currentLanguage)?.label}
                </span>
              )}
            </div>
            
            {(isExpanded || isMobile) && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${currentLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-label">{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Company Info (only when expanded) */}
        {(isExpanded || isMobile) && (
          <div className="sidebar-footer">
            <div className="company-info">
              <p className="company-tagline">
                {t('companyTagline')}
              </p>
            </div>
          </div>
        )}

        {/* Mobile Close Button */}
        {isMobile && isMobileOpen && (
          <button
            className="mobile-close"
            onClick={toggleMobile}
            aria-label="Close mobile menu"
          >
            ×
          </button>
        )}
      </div>

      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div className="mobile-overlay" onClick={toggleMobile}></div>
      )}
    </>
  );
};

export default Sidebar;