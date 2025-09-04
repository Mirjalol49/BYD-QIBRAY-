import { createContext, useContext } from 'react'

// Language Context
export const LanguageContext = createContext()

// Translations
export const translations = {
  uz: {
    // Sidebar
    location: "Manzil",
    testDrive: "Test Drive",
    promoText: "Boshlang'ich to'lov 10% dan",
    // Header
    findPerfectCar: "Mukammal avtomobilingizni toping",
    allCars: "Barcha avtomobillar",
    electric: "Elektr",
    hybrid: "Gibrid",
    // Car details
    detailsButton: "Batafsil",
    viewingButton: "Ko'rilmoqda",
    range: "Masofa",
    acceleration: "Tezlashuv",
    topSpeed: "Maksimal tezlik",
    price: "Narx",
    buyButton: "Sotib olish",
    keyFeatures: "Asosiy xususiyatlar",
    features: [
      "Avtopilot tizimi",
      "Premium ichki materiallar", 
      "Dasturiy yangilanishlar",
      "Supercharger tarmoq kirishi",
      "Mobil ilova ulanishi"
    ],
    // Car types
    hybrid: "Gibrid",
    electric: "Elektr",
    // Test Drive Modal
    testDriveTitle: "Test Drive buyurtma berish",
    testDriveDescription: "BYD avtomobilini sinab ko'rish uchun quyidagi ma'lumotlarni to'ldiring. Bizning mutaxassislarimiz siz bilan bog'lanishadi.",
    fullName: "To'liq ism",
    fullNamePlaceholder: "Ismingizni kiriting",
    phoneNumber: "Telefon raqam",
    preferredDate: "Kerakli sana",
    preferredTime: "Kerakli vaqt",
    selectTime: "Vaqtni tanlang",
    cancel: "Bekor qilish",
    scheduleTestDrive: "Test Drive belgilash",
    submitting: "Yuborilmoqda...",
    submitError: "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
    submitSuccess: "Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
    // Checkout Modal
    checkoutTitle: "Sotib olish",
    personalInfo: "Shaxsiy ma'lumotlar",
    address: "Manzil",
    addressPlaceholder: "Yashash manzilingizni kiriting",
    paymentInfo: "To'lov ma'lumotlari",
    paymentMethod: "To'lov usuli",
    selectPaymentMethod: "To'lov usulini tanlang",
    cash: "Naqd pul",
    installment: "Bo'lib to'lash",
    bankLoan: "Bank krediti",
    leasing: "Lizing",
    downPayment: "Boshlang'ich to'lov",
    selectDownPayment: "Boshlang'ich to'lovni tanlang",
    fullPayment: "To'liq to'lov",
    additionalNotes: "Qo'shimcha izohlar",
    notesPlaceholder: "Qo'shimcha talablar yoki izohlaringizni yozing...",
    submitPurchase: "Sotib olish so'rovini yuborish",
    purchaseSuccess: "Sotib olish so'rovi yuborildi! Tez orada siz bilan bog'lanamiz."
  },
  en: {
    // Sidebar
    location: "Location",
    testDrive: "Test Drive",
    promoText: "Down payment from 10%",
    // Header
    findPerfectCar: "Find your perfect car",
    allCars: "All Cars",
    electric: "Electric",
    hybrid: "Hybrids",
    // Car details
    detailsButton: "Details",
    viewingButton: "Viewing",
    range: "Range (EPA est.)",
    acceleration: "0 - 60 mph*",
    topSpeed: "Top Speed",
    price: "Price",
    buyButton: "Buy",
    keyFeatures: "Key Features",
    features: [
      "Advanced autopilot system",
      "Premium interior materials",
      "Over-the-air software updates", 
      "Supercharger network access",
      "Mobile app connectivity"
    ],
    // Car types
    hybrid: "Hybrid",
    electric: "Electric",
    // Test Drive Modal
    testDriveTitle: "Schedule Test Drive",
    testDriveDescription: "Fill out the information below to test drive a BYD vehicle. Our specialists will contact you.",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    phoneNumber: "Phone Number",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    selectTime: "Select Time",
    cancel: "Cancel",
    scheduleTestDrive: "Schedule Test Drive",
    submitting: "Submitting...",
    submitError: "An error occurred. Please try again.",
    submitSuccess: "Successfully submitted! We will contact you soon.",
    // Checkout Modal
    checkoutTitle: "Purchase",
    personalInfo: "Personal Information",
    address: "Address",
    addressPlaceholder: "Enter your address",
    paymentInfo: "Payment Information",
    paymentMethod: "Payment Method",
    selectPaymentMethod: "Select payment method",
    cash: "Cash",
    installment: "Installment",
    bankLoan: "Bank Loan",
    leasing: "Leasing",
    downPayment: "Down Payment",
    selectDownPayment: "Select down payment",
    fullPayment: "Full Payment",
    additionalNotes: "Additional Notes",
    notesPlaceholder: "Write your additional requirements or comments...",
    submitPurchase: "Submit Purchase Request",
    purchaseSuccess: "Purchase request submitted! We will contact you soon."
  },
  ru: {
    // Sidebar
    location: "Местоположение",
    testDrive: "Тест-драйв",
    promoText: "Первоначальный взнос от 10%",
    // Header
    findPerfectCar: "Найдите свой идеальный автомобиль",
    allCars: "Все автомобили",
    electric: "Электрические",
    hybrid: "Гибриды",
    // Car details
    detailsButton: "Подробнее",
    viewingButton: "Просматривается",
    range: "Запас хода",
    acceleration: "Разгон 0-100 км/ч",
    topSpeed: "Макс. скорость",
    price: "Цена",
    buyButton: "Купить",
    keyFeatures: "Основные характеристики",
    features: [
      "Система автопилота",
      "Премиальные материалы салона",
      "Обновления по воздуху",
      "Доступ к сети Supercharger",
      "Подключение к мобильному приложению"
    ],
    // Car types
    hybrid: "Гибрид",
    electric: "Электро",
    // Test Drive Modal
    testDriveTitle: "Записаться на тест-драйв",
    testDriveDescription: "Заполните информацию ниже, чтобы протестировать автомобиль BYD. Наши специалисты свяжутся с вами.",
    fullName: "Полное имя",
    fullNamePlaceholder: "Введите ваше полное имя",
    phoneNumber: "Номер телефона",
    preferredDate: "Предпочитаемая дата",
    preferredTime: "Предпочитаемое время",
    selectTime: "Выберите время",
    cancel: "Отмена",
    scheduleTestDrive: "Записаться на тест-драйв",
    submitting: "Отправка...",
    submitError: "Произошла ошибка. Попробуйте еще раз.",
    submitSuccess: "Успешно отправлено! Мы скоро свяжемся с вами.",
    // Checkout Modal
    checkoutTitle: "Покупка",
    personalInfo: "Личная информация",
    address: "Адрес",
    addressPlaceholder: "Введите ваш адрес",
    paymentInfo: "Информация об оплате",
    paymentMethod: "Способ оплаты",
    selectPaymentMethod: "Выберите способ оплаты",
    cash: "Наличные",
    installment: "Рассрочка",
    bankLoan: "Банковский кредит",
    leasing: "Лизинг",
    downPayment: "Первоначальный взнос",
    selectDownPayment: "Выберите первоначальный взнос",
    fullPayment: "Полная оплата",
    additionalNotes: "Дополнительные заметки",
    notesPlaceholder: "Напишите ваши дополнительные требования или комментарии...",
    submitPurchase: "Отправить запрос на покупку",
    purchaseSuccess: "Запрос на покупку отправлен! Мы скоро свяжемся с вами."
  }
}

// Custom hook to use language context
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
