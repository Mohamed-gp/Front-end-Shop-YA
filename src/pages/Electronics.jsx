import React, { useState } from 'react'
import Pagination from '../component/Pagination'

const Electronics = () => {

    const [order, setorder] = useState("not-ordered")

    const [filter, setfilter] = useState("not-filtered")

    return (
        <>
            <div className="container p-4 flex justify-between lg:flex-row flex-col gap-3">
                <div className='flex flex-col py-5 border-2 px-11'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl mb-2 text-[#2c3e50]'>ترتيب حسب السعر</p>
                        <div className='flex gap-2 items-center'><input type='radio' checked={order=="not-ordered"} name='price' id='input1' onClick={() => { setorder("not-ordered") }} /><label htmlFor="input1">بدون ترتيب</label></div>
                        <div className='flex gap-2 items-center'><input type='radio' name='price' id='input2' onClick={() => { setorder("low-to-high") }} /><label htmlFor="input2">من الأقل الى الأعلى</label></div>
                        <div className='flex gap-2 items-center'><input type='radio' name='price' id='input3' onClick={() => { setorder("high-to-low") }} /><label htmlFor="input3">من الأعلى الى الأقل</label></div>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-2xl text-[#2c3e50] mb-2'>فلتر حسب السلعة</p>
                        <div className='flex gap-2 items-center'><input type='radio'checked={filter == "not-filtered"} name='filter' id='input4' onClick={() => { setfilter("not-filtered") }} /><label htmlFor="input4">بدون فلتر</label></div>
                        <div className='flex gap-2 items-center'><input type='radio' name='filter' id='input5' onClick={() => { setfilter("laptops-filtered") }} /><label htmlFor="input5">لابتوب</label></div>
                        <div className='flex gap-2 items-center'><input type='radio' name='filter' id='input6' onClick={() => { setfilter("mobiles-filtered") }} /><label htmlFor="input6">جوال</label></div>
                    </div>
                </div>
                <Pagination order={order} setorder={setorder} filter={filter} setfilter={setfilter} />

            </div>
        </>
    )
}

export default Electronics