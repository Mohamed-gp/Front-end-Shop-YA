import { faBars, faPhone, faShop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Header = () => {
    return (
        <>
            <header className='bg-blue-400 text-white'>
                <div className="container flex text-xl justify-between px-4 items-center">
                    <FontAwesomeIcon icon={faBars} className='md:hidden cursor-pointer'/>
                    <div className='hidden md:flex  items-center'>
                        <FontAwesomeIcon icon={faShop} />
                        <p>محمد شوب</p>
                    </div>
                    <p className='text-xl text-amber-400'>اهلا و سهلا بكم</p>
                    <div className='flex items-center gap-1'>
                        <p>123-456-789</p>
                        <FontAwesomeIcon icon={faPhone} />
                    </div>
                </div>
                <div className="container">
                    <div className='flex'>
                        <input type="text" placeholder='ماذا ترید؟'/>
                        <p>ابحث</p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header