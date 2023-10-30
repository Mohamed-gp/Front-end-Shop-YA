import { faBars, faCartPlus, faPhone, faShop, faUser, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const toggleOpen = () => {
    const menu = document.querySelector(".menu")

    menu.classList.add("clipPath-opened")
    menu.classList.remove("clipPath-closed")

}
const toggleClose = () => {
    const menu = document.querySelector(".menu")

    menu.classList.remove("clipPath-opened")
    menu.classList.add("clipPath-closed")

}


const Header = () => {
    return (
        <>
            <header className='bg-blue-400 text-white text-xl font-bold'>
                <div className="top-header bg-[#34495e]">
                    <div className="container flex text-xl justify-between p-4  items-center">
                        <FontAwesomeIcon icon={faBars} className='lg:hidden cursor-pointer' onClick={toggleOpen} />
                        <div className='hidden lg:flex  items-center gap-1'>
                            <FontAwesomeIcon icon={faShop} />
                            <p>محمد شوب</p>
                        </div>
                        <p className=' text-amber-400'>اهلا و سهلا بكم</p>
                        <div className='flex items-center gap-1'>
                            <p>123-456-789</p>
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                    </div>
                </div>
                <div className='bottom-header bg-[#2c3e50] py-4'>
                    <div className="container p-4 flex justify-between flex-wrap gap-4">
                        <div className='flex lg:w-2/4 w-full'>
                            <input type="text" placeholder='ماذا ترید؟' className='text-black focus:outline-none w-full rounded-r-lg py-2 pr-4' />
                            <p className='rounded-l-lg cursor-pointer bg-green-800 py-2 px-4 flex justify-center'>ابحث</p>
                        </div>
                        <Link to="/cart" className='flex items-center gap-1'>
                            <p>سلة التسوق</p>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </Link>
                        <nav className='absolute  bg-[#2c3e50] lg:bg-transparent right-0 top-0 menu h-full z-30 lg:static clipPath-closed duration-1000'>
                            <ul className='flex flex-col lg:flex-row items-center gap-6 lg:p-0 p-10 relative'>
                                <li className='mt-4 lg:m-0'>
                                    <Link to="/" className='hover:text-amber-400 duration-500'>الصفحه الرئیسیه</Link>
                                </li>
                                <li>
                                    <Link to="/electronics" className='hover:text-amber-400 duration-500'>الإلكترونيات و الموبايلات</Link>
                                </li>
                                <li>
                                    <Link to="/kitchen" className='hover:text-amber-400 duration-500'>المنزل و المطبخ</Link>
                                </li>
                                <li>
                                    <Link to="/men" className='hover:text-amber-400 duration-500'>رجاليه</Link>
                                </li>
                                <li>
                                    <Link to="/women" className='hover:text-amber-400 duration-500'>نسائیه</Link>
                                </li>
                                <FontAwesomeIcon icon={faX} className='lg:hidden absolute cursor-pointer text-2xl top-5 text-red-500 left-5' onClick={toggleClose} />
                            </ul>
                        </nav>
                        <Link to className='flex items-center gap-1 text-amber-400'>
                            <p>تسجيل الدخول</p>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header