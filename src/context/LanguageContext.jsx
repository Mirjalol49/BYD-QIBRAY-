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
    fuelConsumption: "Foydalanish",
    chargingTime: "Zaryadlash vaqti",
    electronicAssistants: "Elektron yordamchilar",
    features: [
      "Avtopilot tizimi",
      "Premium ichki materiallar", 
      "Dasturiy yangilanishlar",
      "Supercharger tarmoq kirishi",
      "Mobil ilova ulanishi"
    ],
    // Car details new
    engine: "Dvigatel",
    electricMotor: "Elektr dvigateli",
    hybridSystem: "Gibrid tizim",
    seating: "O'rindiqlar",
    fivePassengers: "5 Yo'lovchi",
    transmission: "Transmissiya",
    automatic: "Avtomatik",
    contactDealer: "Diler bilan bog'lanish",
    purchase: "Xarid",
    descriptionFallback: "keskin texnologiyalar va ajoyib ishlashni birlashtiradi. Yuqori sifatli materiallar va ilg'or xavfsizlik funksiyalari bilan qurilgan bo'lib, eng yaxshi haydash tajribasini ta'minlaydi.",
    companyPhoneNumber: "+998 55 900 88 08",
    companySecondPhoneNumber: "+998 55 555 88 08",

    // Car models
    chazor: "CHAZOR",
    songpro: "SONG PRO",
    songplusdmichampion: "SONG PLUS DM-i CHAMPION",
    songplusevchampion: "SONG PLUS EV CHAMPION",
    seagull: "SEAGULL",
    e2: "E2",
    yuanup: "YUAN UP",
    sealion07: "SEALION 07",

    // Price range labels
    "55 km Active": "55 km Active",
    "55 km Luxe": "55 km Luxe",
    "120 km Comfort": "120 km Comfort",
    "120 km Flagship": "120 km Flagship",
    "71 km Comfort": "71 km Comfort",
    "71 km Flagship": "71 km Flagship",
    "110 km Flagship": "110 km Flagship",
    "520 km Flagship": "520 km Flagship",
    "605 km Flagship": "605 km Flagship",
    "405 km Flying": "405 km Flying",
    "405 km Luxury": "405 km Luxury",
    "401 km Luxury": "401 km Luxury",
    "451 km Flagship": "451 km Flagship",
    "503 km Flagship": "503 km Flagship",

    // Car descriptions
    chazorDescription: "BYD Chazor yuqori sifatli gibrid texnologiyasini hashamatli qulaylik bilan birlashtiradi. Ishlashdan voz kechmasdan samaradorlikni qadrlaydigan zamonaviy haydovchi uchun yaratilgan.",
    songproDescription: "BYD Song Pro DM-i ilg'or gibrid texnologiyasiga ega bo'lib, optimal samaradorlik uchun elektr va benzin quvvati o'rtasida uzluksiz almashadi.",
    songplusdmichampionDescription: "BYD Song Plus DM-i Champion, yuqori samaradorlik va kuchli ishlashni birlashtirgan, sport va oilaviy foydalanish uchun mos gibrid SUV.",
    songplusevchampionDescription: "BYD Song Plus EV Champion, uzoq masofali elektr avtomobil bo'lib, yuqori texnologiyalar va keng ichki makonni taklif etadi. Shahar va sayohatlar uchun ideal.",
    seagullDescription: "BYD Seagull sifatdan taviz bermaydigan arzon elektr avtomobil. Ishonchliligi va samaradorligini qidirayotgan birinchi marta elektr avtomobil xaridorlari uchun mukammal.",
    e2Description: "BYD E2, shahar harakati uchun mo'ljallangan ixcham elektr avtomobil. Uning zamonaviy dizayni va ilg'or akkumulyator texnologiyasi bilan shahar ichida haydash uchun juda mos keladi.",
    yuanupDescription: "BYD Yuan UP, SUV ning amaliyligini elektr dvigatelining samaradorligi bilan birlashtirgan ko'p qirrali krossover.",
    sealion07Description: "BYD Sealion 07 yuqori mustahkamlikdagi arxitektura va pastga o'rnatilgan akkumulyator batareyasi bilan qurilgan bo'lib, yo'lovchilar uchun ajoyib himoyani ta'minlaydi.",

    // Car trims
    active: "Active",
    luxe: "Luxe",
    comfort: "Comfort",
    flagship: "Flagship",
    flying: "Flying",
    luxury: "Luxury",
    
    // Currency
    uzs: "so'm",
    // Test Drive Modal
    testDriveTitle: "Test Drive buyurtma berish",
    testDriveDescription: "BYD avtomobilini sinab ko'rish uchun quyidagi ma'lumotlarni to'ldiring. Bizning mutaxassislarimiz siz bilan bog'lanishadi.",
    fullName: "To'liq ism",
    fullNamePlaceholder: "Ismingizni kiriting",
    phoneNumber: "Telefon raqam",
    preferredDate: "Kerakli sana",
    preferredTime: "Kerakli vaqt",
    cancel: "Bekor qilish",
    scheduleTestDrive: "Test Drive belgilash",
    submitting: "Yuborilmoqda...",
    submitError: "Xatolik yuz berdi. Qaytadan urinib ko'ring.",
    submitSuccess: "Muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
    selectDate: "Sanani tanlang",
    selectTime: "Vaqtni tanlang",
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
    purchaseSuccess: "Sotib olish so'rovi yuborildi! Tez orada siz bilan bog'lanamiz.",
    // Sidebar
    contactUs: "Biz bilan bog'laning",
    followUs: "Bizni kuzatib boring"
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
    fuelConsumption: "Consumption",
    chargingTime: "Charging Time",
    electronicAssistants: "Electronic Assistants",
    features: [
      "Advanced autopilot system",
      "Premium interior materials",
      "Over-the-air software updates", 
      "Supercharger network access",
      "Mobile app connectivity"
    ],
    // Car details new
    engine: "Engine",
    electricMotor: "Electric Motor",
    hybridSystem: "Hybrid System",
    seating: "Seating",
    fivePassengers: "5 Passengers",
    transmission: "Transmission",
    automatic: "Automatic",
    contactDealer: "Contact Dealer",
    purchase: "Purchase",
    descriptionFallback: "combines cutting-edge technology with exceptional performance. Built with premium materials and advanced safety features for the ultimate driving experience.",
    companyPhoneNumber: "+998 55 900 88 08",
    companySecondPhoneNumber: "+998 55 555 88 08",

    // Car models
    chazor: "CHAZOR",
    songpro: "SONG PRO",
    songplusdmichampion: "SONG PLUS DM-i CHAMPION",
    songplusevchampion: "SONG PLUS EV CHAMPION",
    seagull: "SEAGULL",
    e2: "E2",
    yuanup: "YUAN UP",
    sealion07: "SEALION 07",

    // Price range labels
    "55 km Active": "55 km Active",
    "55 km Luxe": "55 km Luxe",
    "120 km Comfort": "120 km Comfort",
    "120 km Flagship": "120 km Flagship",
    "71 km Comfort": "71 km Comfort",
    "71 km Flagship": "71 km Flagship",
    "110 km Flagship": "110 km Flagship",
    "520 km Flagship": "520 km Flagship",
    "605 km Flagship": "605 km Flagship",
    "405 km Flying": "405 km Flying",
    "405 km Luxury": "405 km Luxury",
    "401 km Luxury": "401 km Luxury",
    "451 km Flagship": "451 km Flagship",
    "503 km Flagship": "503 km Flagship",

    // Car descriptions
    chazorDescription: "The BYD Chazor combines cutting-edge hybrid technology with luxurious comfort. Built for the modern driver who values efficiency without compromising on performance.",
    songproDescription: "The BYD Song Pro DM-i features advanced hybrid technology that seamlessly switches between electric and gasoline power for optimal efficiency.",
    songplusdmichampionDescription: "The BYD Song Plus DM-i Champion is a hybrid SUV that combines high efficiency and powerful performance, suitable for both sporty and family use.",
    songplusevchampionDescription: "The BYD Song Plus EV Champion is a long-range electric vehicle offering high technology and a spacious interior. Ideal for city and travel.",
    seagullDescription: "The BYD Seagull is an affordable electric vehicle that doesn't compromise on quality. Perfect for first-time EV buyers looking for reliability and efficiency.",
    e2Description: "The BYD E2 is a compact electric vehicle designed for urban mobility. With its sleek design and advanced battery technology, it's perfect for city driving.",
    yuanupDescription: "The BYD Yuan UP is a versatile crossover that combines the practicality of an SUV with the efficiency of an electric powertrain.",
    sealion07Description: "The BYD Sealion 07 is built from the ground up as an electric SUV, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection.",

    // Car trims
    active: "Active",
    luxe: "Luxe",
    comfort: "Comfort",
    flagship: "Flagship",
    flying: "Flying",
    luxury: "Luxury",

    // Currency
    uzs: "UZS",
    // Test Drive Modal
    testDriveTitle: "Schedule Test Drive",
    testDriveDescription: "Fill out the information below to test drive a BYD vehicle. Our specialists will contact you.",
    fullName: "Full Name",
    fullNamePlaceholder: "Enter your full name",
    phoneNumber: "Phone Number",
    preferredDate: "Preferred Date",
    preferredTime: "Preferred Time",
    cancel: "Cancel",
    scheduleTestDrive: "Schedule Test Drive",
    submitting: "Submitting...",
    submitError: "An error occurred. Please try again.",
    submitSuccess: "Successfully submitted! We will contact you soon.",
    selectDate: "Select Date",
    selectTime: "Select Time",
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
    purchaseSuccess: "Purchase request submitted! We will contact you soon.",
    // Sidebar
    contactUs: "Contact Us",
    followUs: "Follow Us"
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
    fuelConsumption: "Расход",
    chargingTime: "Время зарядки",
    electronicAssistants: "Электронные помощники",
    features: [
      "Система автопилота",
      "Премиальные материалы салона",
      "Обновления по воздуху",
      "Доступ к сети Supercharger",
      "Подключение к мобильному приложению"
    ],
    // Car details new
    engine: "Двигатель",
    electricMotor: "Электродвигатель",
    hybridSystem: "Гибридная система",
    seating: "Мест",
    fivePassengers: "5 Пассажиров",
    transmission: "Трансмиссия",
    automatic: "Автоматическая",
    contactDealer: "Связаться с дилером",
    purchase: "Покупка",
    descriptionFallback: "сочетает в себе передовые технологии с исключительной производительностью. Созданный из высококачественных материалов и передовых функций безопасности для максимального удовольствия от вождения.",
    companyPhoneNumber: "+998 55 900 88 08",
    companySecondPhoneNumber: "+998 55 555 88 08",

    // Car models
    chazor: "CHAZOR",
    songpro: "SONG PRO",
    songplusdmichampion: "SONG PLUS DM-i CHAMPION",
    songplusevchampion: "SONG PLUS EV CHAMPION",
    seagull: "SEAGULL",
    e2: "E2",
    yuanup: "YUAN UP",
    sealion07: "SEALION 07",

    // Price range labels
    "55 km Active": "55 км Active",
    "55 km Luxe": "55 км Luxe",
    "120 km Comfort": "120 км Comfort",
    "120 km Flagship": "120 км Flagship",
    "71 km Comfort": "71 км Comfort",
    "71 km Flagship": "71 км Flagship",
    "110 km Flagship": "110 км Flagship",
    "520 km Flagship": "520 км Flagship",
    "605 km Flagship": "605 км Flagship",
    "405 km Flying": "405 км Flying",
    "405 km Luxury": "405 км Luxury",
    "401 km Luxury": "401 км Luxury",
    "451 km Flagship": "451 км Flagship",
    "503 km Flagship": "503 км Flagship",

    // Car descriptions
    chazorDescription: "BYD Chazor сочетает передовые гибридные технологии с роскошным комфортом. Создан для современного водителя, который ценит эффективность без ущерба для производительности.",
    songproDescription: "BYD Song Pro DM-i оснащен передовой гибридной технологией, которая плавно переключается между электрической и бензиновой мощностью для оптимальной эффективности.",
    songplusdmichampionDescription: "BYD Song Plus DM-i Champion — это гибридный внедорожник, сочетающий высокую эффективность и мощную производительность, подходящий как для спортивного, так и для семейного использования.",
    songplusevchampionDescription: "BYD Song Plus EV Champion — это электромобиль с большим запасом хода, предлагающий высокие технологии и просторный интерьер. Идеально подходит для города и путешествий.",
    seagullDescription: "BYD Seagull — это доступный электромобиль, который не уступает в качестве. Идеально подходит для тех, кто впервые покупает электромобиль и ищет надежность и эффективность.",
    e2Description: "BYD E2 — это компактный электромобиль, предназначенный для городской мобильности. Благодаря своему элегантному дизайну и передовой технологии аккумуляторов он идеально подходит для городской езды.",
    yuanupDescription: "BYD Yuan UP — это универсальный кроссовер, который сочетает практичность внедорожника с эффективностью электрической силовой установки.",
    sealion07Description: "BYD Sealion 07 построен с нуля как электрический внедорожник, с высокопрочной архитектурой и расположенным в полу аккумуляторным блоком для невероятной защиты пассажиров.",

    // Car trims
    active: "Active",
    luxe: "Luxe",
    comfort: "Comfort",
    flagship: "Flagship",
    flying: "Flying",
    luxury: "Luxury",

    // Currency
    uzs: "сум",
    // Test Drive Modal
    testDriveTitle: "Записаться на тест-драйв",
    testDriveDescription: "Заполните информацию ниже, чтобы протестировать автомобиль BYD. Наши специалисты свяжутся с вами.",
    fullName: "Полное имя",
    fullNamePlaceholder: "Введите ваше полное имя",
    phoneNumber: "Номер телефона",
    preferredDate: "Предпочитаемая дата",
    preferredTime: "Предпочитаемое время",
    cancel: "Отмена",
    scheduleTestDrive: "Записаться на тест-драйв",
    submitting: "Отправка...",
    submitError: "Произошла ошибка. Попробуйте еще раз.",
    submitSuccess: "Успешно отправлено! Мы скоро свяжемся с вами.",
    selectDate: "Выберите дату",
    selectTime: "Выберите время",
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
    purchaseSuccess: "Запрос на покупку отправлен! Мы скоро свяжемся с вами.",
    // Sidebar
    contactUs: "Связаться с нами",
    followUs: "Подписывайтесь на нас"
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
