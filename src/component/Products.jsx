import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { specialOffers } from "../data/special-offers"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import Product from "./Product"


const Products = () => {


    return (
        <>
            <div className="container px-4 flex justify-between gap-y-6 flex-wrap">
                {specialOffers.map((product) => {
                    return (
                        <Product product={product}/>
                    )
                })}

            </div>
        </>
    )
}

export default Products