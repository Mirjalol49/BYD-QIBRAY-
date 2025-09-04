
import { useState, useEffect } from 'react'
import './App.css'
import Main from './assets/Pages/Main/Main'
import Sidebar from './assets/Components/Sidebar/Sidebar'
import CarDetailsPanel from './assets/Components/CarDetailsPanel/CarDetailsPanel'
import TestDriveModal from './assets/Components/TestDriveModal/TestDriveModal'
import CheckoutModal from './assets/Components/CheckoutModal/CheckoutModal'
import { LanguageContext, translations } from './context/LanguageContext'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCar, setSelectedCar] = useState(null)
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false)
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('uz')

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCarSelect = (car) => {
    setSelectedCar(car)
    setIsCarDetailsOpen(true)
  }

  const handleCloseCarDetails = () => {
    setIsCarDetailsOpen(false)
    setTimeout(() => setSelectedCar(null), 300) // Wait for animation to complete
  }

  const handleOpenTestDrive = () => {
    setIsTestDriveOpen(true)
  }

  const handleCloseTestDrive = () => {
    setIsTestDriveOpen(false)
  }

  const handleOpenCheckout = (car) => {
    setSelectedCar(car)
    setIsCheckoutOpen(true)
  }

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false)
    setSelectedCar(null)
  }

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang)
  }

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  const languageContextValue = {
    currentLanguage,
    changeLanguage,
    t,
    translations: translations[currentLanguage]
  }

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <div className='app'>
        <Sidebar isMobile={isMobile} onTestDriveClick={handleOpenTestDrive} />
        <div className="content">
          <Main 
            onCarSelect={handleCarSelect} 
            selectedCarId={selectedCar?.id}
          />
        </div>
        
        <CarDetailsPanel
          car={selectedCar}
          isOpen={isCarDetailsOpen}
          onClose={handleCloseCarDetails}
          onBuyClick={handleOpenCheckout}
        />

        <TestDriveModal
          isOpen={isTestDriveOpen}
          onClose={handleCloseTestDrive}
        />

        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
          car={selectedCar}
        />
      </div>
    </LanguageContext.Provider>
  )
}

export default App
