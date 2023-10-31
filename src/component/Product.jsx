import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { specialOffers } from "../data/special-offers"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


const Product = ({ product }) => {
    const [changeimage, setchangeimage] = useState(0)
    const increaseimgindex = () => {
        if (changeimage == 0) {
            setchangeimage(1)
        }
    }
    const deccreaseimgindex = () => {
        if (changeimage == 1) {
            setchangeimage(0)
        }
    }
    return (
        <div className="w-full product relative flex product justify-between items-center bg-white rounded-2xl py-4" key={product.id}>
            <div>
                <img src={`${product.assets[changeimage]}`} alt="" className="w-80" onMouseLeave={() => { deccreaseimgindex() }} onMouseEnter={() => { increaseimgindex() }} />
            </div>
            <div className="w-3/4 flex flex-col gap-2">
                <p className="font-bold text-2xl text-[#2c3e50]">{product.title}
                </p>
                <div className="flex gap-4 items-center">
                    <div className="flex items-center text-white px-2 gap-1 py-1 rounded-lg bg-green-500 font-bold">
                        <p>{product.rating}</p>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="text-[#2a7ddbb3] font-bold">{product.reviews} تقییمات</p>
                </div>
                <p className="flex  gap-2 font-bold text-2xl">${product.price - product.price * (product.discount / 100)}<span className="text-red-500 line-through">${product.price}</span></p>
                <Link to={`product/${product.id}`} className="bg-[#2c3e50] font-bold rounded-tr-md rounded-bl-2xl w-fit px-6 py-2 text-white">شاهد المزيد  ...</Link>
            </div>
            <p className="absolute top-2 left-2 px-4 py-1 rounded-3xl bg-green-400 text-white font-bold">خصم {product.discount}%</p>
        </div>
    )
}

export default Product