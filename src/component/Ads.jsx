import React from 'react'

const Ads = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-between gap-5 container px-4 my-4">
                <div className='lg:w-1/2 overflow-hidden'>
                    <img className='h-64 w-full' src="/assets/banners/house.png" alt="" />
                </div>
                <div className='lg:w-1/2'>
                    <img className='h-64 w-full' src="/assets/banners/shoes.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Ads