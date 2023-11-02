import { faArrowLeft, faArrowRight, faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { products } from '../data/products'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Mobilesslider = () => {
    //slider index 
    const [sliderIndex, setsliderIndex] = useState(0)
    //get laptop data
    const phonesData = products.filter((e) => !e.isLaptop)

    //slider functionality

    const slide = (direction) => {
        direction == "toleft" ? setsliderIndex(i => i - 1) : setsliderIndex(i => i + 1)
    }



    return (
        <>
            <div className="container">
                <p className='text-4xl font-bold mt-10 text-[#2c3e50]'>الجدید من اللابتوبات</p>
            </div>
            <div className="container p-4 slider relative  h-96 my-8 overflow-hidden">
                <div className="slider-wrapper absolute h-full w-full flex gap-3 duration-1000 " style={{ width: `${phonesData.length * 240}px`, right: `${240 * sliderIndex}px` }} >
                    {phonesData.map((product) => {
                        return (
                            <div className='flex-col pb-1 items-center justify-center flex w-60 h-80 bg-white' key={product.id}>
                                <Link to={`/shop/${product.id}`} className='img'>
                                    <img src={product.image} alt="" className='w-24 mb-2' />
                                </Link>
                                <div className='flex px-4  flex-col gap-3 justify-center items-center'>
                                    <p className='font-bold h-14'>{product.title}</p>
                                    <div className='flex gap-4 items-center'>
                                        <div className='items-center bg-green-500 text-white px-2 py-1 rounded-lg flex gap-1'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <p>{product.rating}</p>
                                        </div>
                                        <p className='text-blue-400'>{product.reviews} تقييم</p>
                                    </div>
                                    <button className='flex items-center gap-2 py-1 px-3 rounded-lg bg-[#2c3e50] text-white'>
                                        <p>Add To Cart</p>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                    <p className='text-red-600 font-bold pb-2'>{product.price} $</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <button disabled={sliderIndex == 0} className='disabled:opacity-50' onClick={() => slide("toright")} >
                    <FontAwesomeIcon icon={faArrowRight} className={`absolute w-6 h-6 rounded-full p-2 cursor-pointer bg-green-500 text-white top-1/2 right-3 -translate-y-1/2 `} />
                </button>
                <button disabled={!(sliderIndex - 1 > -phonesData.length)} onClick={() => slide("toleft")}>
                    <FontAwesomeIcon icon={faArrowLeft} className='absolute disabled:opacity-50 w-6 h-6 rounded-full p-2 cursor-pointer bg-green-500 text-white top-1/2 left-3 -translate-y-1/2 ' />

                </button>
            </div>
        </>
    )
}

export default Mobilesslider