import React, { useEffect, useState } from 'react'
import { products } from '../data/products'
import { Link } from 'react-router-dom'
import { faCartPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Pagination = ({ order, setorder, filter, setfilter }) => {

    // save original array to keep in with use 
    const [saveddata, setsaveddata] = useState(products)
    // const [tmpdata, settmpdata] = useState(saveddata)

    const pagesNumber = Math.ceil(saveddata.length / 3)


    // empty array
    const emptyArray = []
    const [currentpage, setcurrentpage] = useState(1)


    const productsperpage = 3

    // used data 
    const [useddata, setuseddata] = useState(saveddata.slice(productsperpage * currentpage - productsperpage, productsperpage * currentpage))


    {
        for (let index = 1; index <= pagesNumber; index++) {
            emptyArray.push(index)

        }
    }

    // set data effect
    useEffect(() => {
        setuseddata(saveddata.slice(productsperpage * currentpage - productsperpage, productsperpage * currentpage))
    }, [currentpage])
    // set order and filter effect


 
    useEffect(() => {
        if (order == "not-ordered") {
            setsaveddata(products)
        }
        if (order == "low-to-high") {
            saveddata.sort((a, b) => +a.price - +b.price);
        }
        if (order == "high-to-low") {
            saveddata.sort((a, b) => +b.price - +a.price);
        }
        if (filter == "not-filtered") {
            setuseddata(saveddata.slice(productsperpage * currentpage - productsperpage, productsperpage * currentpage))
        }
        if (filter == "laptops-filtered") {
            setuseddata(products.filter(e => e.isLaptop).slice(productsperpage * currentpage - productsperpage, productsperpage * currentpage))
        }
        if (filter == "mobiles-filtered") {
            setuseddata(saveddata.filter(e => !e.isLaptop).slice(productsperpage * currentpage - productsperpage, productsperpage * currentpage))

            
        }
        setcurrentpage(1)
    }, [order, filter])
    // order




    // filter 


    return (
        <>
            <div className="flex flex-col w-full items-center">
                <div className="flex justify-center gap-3 flex-wrap ">
                    {useddata.map((e) => {

                        return (

                            <div className='flex-col pb-1 items-center justify-center flex w-60 h-80 bg-white' key={e.id}>
                                <Link to={`/shop/${e.id}`} className='img'>
                                    <img src={e.image} alt="" className='w-24 mb-2' />
                                </Link>
                                <div className='flex px-4  flex-col gap-3 justify-center items-center'>
                                    <p className='font-bold h-14'>{e.title}</p>
                                    <div className='flex gap-4 items-center'>
                                        <div className='items-center bg-green-500 text-white px-2 py-1 rounded-lg flex gap-1'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <p>{e.rating}</p>
                                        </div>
                                        <p className='text-blue-400'>{e.reviews} تقييم</p>
                                    </div>
                                    <button className='flex items-center gap-2 py-1 px-3 rounded-lg bg-[#2c3e50] text-white'>
                                        <p>Add To Cart</p>
                                        <FontAwesomeIcon icon={faCartPlus} />
                                    </button>
                                    <p className='text-red-600 font-bold pb-2'>{e.price} $</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="flex my-3 text-white w-full justify-center text-xs lg:text-base" >

                    <button disabled={currentpage == 1} className='disabled:opacity-50 disabled:cursor-not-allowed bg-[#2c3e50] px-4 py-2  rounded-r-xl' onClick={() => { setcurrentpage(e => e - 1) }}>ارجع</button>
                    {emptyArray.map((buttons) => {

                        return (

                            <button onClick={() => { setcurrentpage(+buttons) }} className={`bg-[#2c3e50] border-x-2 px-2 lg:px-4 py-1 lg:py-2 ${+buttons == currentpage ? 'opacity-50' : ''}`}>{buttons}</button>
                        )
                    })}
                    <button disabled={currentpage >= pagesNumber} className='disabled:opacity-50 disabled:cursor-not-allowed bg-[#2c3e50] px-4 py-2  rounded-l-xl' onClick={() => { setcurrentpage(e => e + 1) }}>تقدم</button>

                </div>
            </div>



        </>
    )
}

export default Pagination