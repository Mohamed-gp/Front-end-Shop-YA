import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { products } from '../data/products'
import { useState } from 'react'



const Laptopslider = () => {
    //slider index 
    const [sliderIndex,setsliderIndex] = useState(0)
    //get laptop data
    const laptopsData = products.filter((e) => e.isLaptop)
    
    
    return (
    <>
    <div className="container">
        <p className='text-4xl font-bold mt-10 text-[#2c3e50]'>الجدید من اللابتوبات</p>
    </div>
    <div className="container p-4 slider relative  bg-red-600 h-28 my-8">
        <div className="slider-wrapper w-full flex">
            {laptopsData.map((product) => {
                return(
                    <div className='flex-col flex'>
                        <div className='img'>
                            <img src={product.image} alt="" />
                        </div>
                    </div>
                )
            })}
        </div>
        <FontAwesomeIcon icon={faArrowRight} className='absolute w-6 h-6 rounded-full p-2 cursor-pointer bg-green-500 text-white top-1/2 right-3 -translate-y-1/2 '/>
        <FontAwesomeIcon icon={faArrowLeft} className='absolute w-6 h-6 rounded-full p-2 cursor-pointer bg-green-500 text-white top-1/2 left-3 -translate-y-1/2 '/>
    </div>
    </>
  )
}

export default Laptopslider