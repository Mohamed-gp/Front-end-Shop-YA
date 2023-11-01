import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const date = new Date()

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container flex flex-col p-4">
                    <div className='items-center flex justify-between'>
                        <p className='font-bold text-[#2c3e50] text-3xl'>متواجدین دائما لمساعدتك</p>
                        <div className='flex text-lg font-bold opacity-80 flex-col gap-2 items-center justify-center'>
                            <p>تواصل معانا عبر الإيميل</p>
                            <div className='flex  text-blue-950 gap-2 items-center'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <p>mohamed-gp@fakeemail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between gap-4 my-6'>
                        <div className='lg:w-1/5  md:w-1/3 w-full flex flex-col space-y-4'>
                            <p className='font-bold text-3xl'>الإلكترونيات</p>
                            <p className='text-lg '>الکامیرات و تسجیل فیدیو</p>
                            <p className='text-lg '>الأجهزه المنزلیه</p>
                            <p className='text-lg '>الهواتف</p>
                            <p className='text-lg '>سماعات الرأس</p>
                            <p className='text-lg '>التلفیزیونات</p>
                            <p className='text-lg '>اجهزه التابلیت</p>
                            
                            
                            
                            
                        </div>
                        <div className='lg:w-1/5  md:w-1/3 w-full flex flex-col space-y-4'>
                            <p className='font-bold text-3xl'>الإلكترونيات</p>
                            <p className='text-lg '>الکامیرات و تسجیل فیدیو</p>
                            <p className='text-lg '>الأجهزه المنزلیه</p>
                            <p className='text-lg '>الهواتف</p>
                            <p className='text-lg '>سماعات الرأس</p>
                            <p className='text-lg '>التلفیزیونات</p>
                            <p className='text-lg '>اجهزه التابلیت</p>
                            
                            
                            
                            
                        </div>
                        <div className='lg:w-1/5  md:w-1/3 w-full flex flex-col space-y-4'>
                            <p className='font-bold text-3xl'>الإلكترونيات</p>
                            <p className='text-lg '>الکامیرات و تسجیل فیدیو</p>
                            <p className='text-lg '>الأجهزه المنزلیه</p>
                            <p className='text-lg '>الهواتف</p>
                            <p className='text-lg '>سماعات الرأس</p>
                            <p className='text-lg '>التلفیزیونات</p>
                            <p className='text-lg '>اجهزه التابلیت</p>
                            
                            
                            
                            
                        </div>
                        <div className='lg:w-1/5  md:w-1/3 w-full flex flex-col space-y-4'>
                            <p className='font-bold text-3xl'>الإلكترونيات</p>
                            <p className='text-lg '>الکامیرات و تسجیل فیدیو</p>
                            <p className='text-lg '>الأجهزه المنزلیه</p>
                            <p className='text-lg '>الهواتف</p>
                            <p className='text-lg '>سماعات الرأس</p>
                            <p className='text-lg '>التلفیزیونات</p>
                            <p className='text-lg '>اجهزه التابلیت</p>
                            
                            
                            
                            
                        </div>
                        


                    </div>
                </div>
                <div className='flex items-center justify-center py-6 text-2xl text-white bg-[#2c3e50] font-bold'>
                    <p>&copy; كل الحقوق محفوظة {date.getFullYear()}</p>
                </div>
            </footer>
        </>
    )
}

export default Footer