import React from 'react'



const Brands = () => {
  return (
    <>
    <div className="flex justify-between mb-6 container gap-12 p-4 flex-wrap">
        <div className='w-full md:w-1/5  flex justify-center items-center bg-white rounded-xl h-full'>
            <img src="/assets/brands/brand1.png" className='h-28' alt="" />
        </div>
        <div className='w-full md:w-1/5  flex justify-center items-center bg-white rounded-xl h-full'>
            <img src="/assets/brands/brand5.jpg" className='h-28' alt="" />
        </div>
        <div className='w-full md:w-1/5  flex justify-center items-center bg-white rounded-xl h-full'>
            <img src="/assets/brands/brand3.png" className='h-28' alt="" />
        </div>
        <div className='w-full md:w-1/5  flex justify-center items-center bg-white rounded-xl h-full'>
            <img src="/assets/brands/brand4.png" className='h-28' alt="" />
        </div>
    </div>
    </>
  )
}

export default Brands