import React, { useState } from 'react'
import CarProduct from '../../Components/CarProduct/CarProduct';
import Header from '../../Components/Header/Header';
import Chazor from "../../Images/chazor.jpg"
import E2 from "../../Images/e2.jpg"
import Han from "../../Images/han.jpg"
import Seagul from "../../Images/seagul.jpg"
import Sealion from "../../Images/sealion7.jpg"
import SongProdm1 from "../../Images/songprodm1.jpg"
import SongproPlus from "../../Images/songproplus.jpg"
import Yuanup from "../../Images/yuanup.jpg"
import "./Main.css"

const Main = ({ onCarSelect, selectedCarId }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  // Car data with detailed information
  const carsData = [
    {
      id: 1,
      img: Chazor,
      title: "BYD Chazor",
      type: "Hybrid",
      range: "420 mi",
      acceleration: "2.8 s",
      topSpeed: "180 mph",
      price: "45,900",
      description: "The BYD Chazor combines cutting-edge hybrid technology with luxurious comfort. Built for the modern driver who values efficiency without compromising on performance."
    },
    {
      id: 2,
      img: E2,
      title: "BYD E2",
      type: "Electric",
      range: "305 mi",
      acceleration: "3.2 s",
      topSpeed: "160 mph",
      price: "32,900",
      description: "The BYD E2 is a compact electric vehicle designed for urban mobility. With its sleek design and advanced battery technology, it's perfect for city driving."
    },
    {
      id: 3,
      img: Han,
      title: "BYD Han",
      type: "Electric",
      range: "376 mi",
      acceleration: "2.5 s",
      topSpeed: "185 mph",
      price: "52,900",
      description: "The BYD Han represents the pinnacle of electric luxury sedans. With its flagship design and premium features, it delivers an unmatched driving experience."
    },
    {
      id: 4,
      img: Seagul,
      title: "BYD Seagul",
      type: "Electric",
      range: "280 mi",
      acceleration: "3.5 s",
      topSpeed: "150 mph",
      price: "28,900",
      description: "The BYD Seagul is an affordable electric vehicle that doesn't compromise on quality. Perfect for first-time EV buyers looking for reliability and efficiency."
    },
    {
      id: 5,
      img: Sealion,
      title: "BYD Sealion",
      type: "Electric",
      range: "450 mi",
      acceleration: "2.1 s",
      topSpeed: "200 mph",
      price: "68,900",
      description: "The BYD Sealion is built from the ground up as an electric SUV, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection."
    },
    {
      id: 6,
      img: SongProdm1,
      title: "BYD Song Pro DM-i",
      type: "Hybrid",
      range: "350 mi",
      acceleration: "3.0 s",
      topSpeed: "175 mph",
      price: "38,900",
      description: "The BYD Song Pro DM-i features advanced hybrid technology that seamlessly switches between electric and gasoline power for optimal efficiency."
    },
    {
      id: 7,
      img: SongproPlus,
      title: "BYD Song Pro Plus",
      type: "Hybrid",
      range: "380 mi",
      acceleration: "2.9 s",
      topSpeed: "180 mph",
      price: "42,900",
      description: "The BYD Song Pro Plus offers enhanced features and performance, making it the perfect choice for families who want luxury and efficiency."
    },
    {
      id: 8,
      img: Yuanup,
      title: "BYD Yuan UP",
      type: "Electric",
      range: "320 mi",
      acceleration: "3.1 s",
      topSpeed: "165 mph",
      price: "35,900",
      description: "The BYD Yuan UP is a versatile crossover that combines the practicality of an SUV with the efficiency of an electric powertrain."
    }
  ]

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const filteredCars = carsData.filter(car => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'electric') return car.type.toLowerCase() === 'electric'
    if (activeFilter === 'hybrid') return car.type.toLowerCase() === 'hybrid'
    if (activeFilter === 'gasoline') return car.type.toLowerCase() === 'gasoline'
    return true
  })

  return (
    <main>
      <Header 
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />
      <section>
        <div className="container">
          <div className="product-wrapper">
            {filteredCars.map((car) => (
              <CarProduct
                key={car.id}
                img={car.img}
                title={car.title}
                type={car.type}
                isSelected={selectedCarId === car.id}
                onDetailsClick={() => onCarSelect(car)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
