
import { useState, useEffect } from 'react'
import './App.css'
import Main from './assets/Pages/Main/Main'
import Sidebar from './assets/Components/Sidebar/Sidebar'
import CarDetailsPanel from './assets/Components/CarDetailsPanel/CarDetailsPanel'
import TestDriveModal from './assets/Components/TestDriveModal/TestDriveModal'
import CheckoutModal from './assets/Components/CheckoutModal/CheckoutModal'
import { LanguageContext, translations } from './context/LanguageContext'
import ChazorImage from './assets/Images/chazor.jpg'
import SongProImage from './assets/Images/songprodm1.jpg'
import SongPlusDMiChampionImage from './assets/Images/songplusdm1chempion.jpg'
import SongPlusEVChampionImage from './assets/Images/songproplus.jpg'
import SeagullImage from './assets/Images/seagul.jpg'
import E2Image from './assets/Images/e2.jpg'
import YuanUpImage from './assets/Images/yuanup.jpg'
import Sealion07Image from './assets/Images/sealion7.jpg'

function App() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [isCarDetailsOpen, setIsCarDetailsOpen] = useState(false)
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState('uz')

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

  const cars = [
    {
      id: 'chazor',
      title: t('chazor'),
      type: 'Hybrid',
      img: ChazorImage,
      description: t('chazorDescription'),
      range: '700 km',
      acceleration: '7.3 s',
      topSpeed: '180 km/h',
      prices: [
        { range: '55 km Active', value: '273 900 000' },
        { range: '55 km Luxe', value: '288 100 000' },
        { range: '120 km Comfort', value: '302 300 000' },
        { range: '120 km Flagship', value: '315 200 000' },
      ],
    },
    {
      id: 'songpro',
      title: t('songpro'),
      type: 'Hybrid',
      img: SongProImage,
      description: t('songproDescription'),
      range: '1100 km',
      acceleration: '6.5 s',
      topSpeed: '180 km/h',
      prices: [
        { range: '71 km Comfort', value: '321 800 000' },
        { range: '71 km Flagship', value: '334 400 000' },
        { range: '110 km Flagship', value: '359 800 000' },
      ],
    },
    {
      id: 'songplusdmichampion',
      title: t('songplusdmichampion'),
      type: 'Hybrid',
      img: SongPlusDMiChampionImage,
      description: t('songplusdmichampionDescription'),
      range: '1200 km',
      acceleration: '5.9 s',
      topSpeed: '180 km/h',
      prices: [
        { range: '110 km Flagship', value: '387 200 000' },
        { range: '150 km Flagship', value: '409 700 000' },
      ],
    },
    {
      id: 'songplusevchampion',
      title: t('songplusevchampion'),
      type: 'Electric',
      img: SongPlusEVChampionImage,
      description: t('songplusevchampionDescription'),
      range: '605 km',
      acceleration: '4.9 s',
      topSpeed: '180 km/h',
      prices: [
        { range: '520 km Flagship', value: '395 300 000' },
        { range: '605 km Flagship', value: '402 500 000' },
      ],
    },
    {
      id: 'seagull',
      title: t('seagull'),
      type: 'Electric',
      img: SeagullImage,
      description: t('seagullDescription'),
      range: '405 km',
      acceleration: '3.9 s',
      topSpeed: '130 km/h',
      prices: [
        { range: '405 km Flying', value: '208 300 000' },
      ],
    },
    {
      id: 'e2',
      title: t('e2'),
      type: 'Electric',
      img: E2Image,
      description: t('e2Description'),
      range: '405 km',
      acceleration: '4.5 s',
      topSpeed: '130 km/h',
      prices: [
        { range: '405 km Luxury', value: '236 600 000' },
      ],
    },
    {
      id: 'yuanup',
      title: t('yuanup'),
      type: 'Electric',
      img: YuanUpImage,
      description: t('yuanupDescription'),
      range: '401 km',
      acceleration: '5.0 s',
      topSpeed: '150 km/h',
      prices: [
        { range: '401 km Luxury', value: '266 700 000' },
      ],
    },
    {
      id: 'sealion07',
      title: t('sealion07'),
      type: 'Electric',
      img: Sealion07Image,
      description: t('sealion07Description'),
      range: '550 km',
      acceleration: '3.5 s',
      topSpeed: '180 km/h',
      prices: [
        { range: '451 km Flagship', value: '451 100 000' },
        { range: '503 km Flagship', value: '503 000 000' },
      ],
    },
  ]

  const languageContextValue = {
    currentLanguage,
    changeLanguage,
    t,
    translations: translations[currentLanguage]
  }

  return (
    <LanguageContext.Provider value={languageContextValue}>
      <div className='app'>
        <Sidebar onTestDriveClick={handleOpenTestDrive} />
        <div className="content">
          <Main 
            onCarSelect={handleCarSelect} 
            selectedCarId={selectedCar?.id}
            cars={cars}
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
