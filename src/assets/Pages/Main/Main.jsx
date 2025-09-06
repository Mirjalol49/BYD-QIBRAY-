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

const Main = ({ onCarSelect, selectedCarId, cars }) => {
  const [activeFilter, setActiveFilter] = useState('all')
  // Car data with detailed information

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const filteredCars = cars.filter(car => {
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
                car={car}
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
