'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '@/types'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import './style.css'

export const NewArrival = () => {
  const [activeTab, setActiveTab] = useState('전체')
  const [products, setProducts] = useState<Product[]>([])
  const tabs = ['전체', '남성', '여성', '잡화/슈즈', '키즈']

  useEffect(() => {
    axios.get<Product[]>('https://bloodbrothers.com/new').then((response) => {
      setProducts(response.data)
      console.log(response.data)
    })
  }, [])

  const filteredProducts =
    activeTab === '전체' ? products : products.filter((product) => product.category === activeTab)

  return (
    <div className="flex flex-col items-center my-6">
      <h1 className="text-2xl font-bold mb-4 text-darkblue">New Arrival</h1>
      <div className="flex justify-center pb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab)
              console.log(filteredProducts)
            }}
            className={`py-2 px-4 mx-2 text-center ${
              activeTab === tab ? 'border-b-[3px] border-darkblue' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div mb-8 style={{ maxWidth: '1200px', width: '100%' }}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {filteredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <Image src={product.img} alt={product.name} width={300} height={300} />
              <div className="py-2">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="h-[30px]" />
        </Swiper>
      </div>
    </div>
  )
}

export default NewArrival
