import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cart = useSelector(state => state.storeReducer.cart)
    const dispatch = useDispatch()
    return (
        <>
            <div className="container p-4 ">
                {cart.length == 0 ?
                    <div className='flex flex-col gap-4 h-80'>
                        <p className='text-gray-800 font-bold text-3xl'>سله التسوق الخاصه بك فارغه</p>
                        <p className='text-gray-800 font-bold text-xl opacity-75'>لا یوجد سلع</p>
                        <Link to="electronics" className='text-blue-500 font-bold cursor-pointer underline'>الذهاب الى السلع</Link>
                    </div> :
                    <>
                    
                    </>}
            </div>
        </>
    )
}

export default Cart