import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Shop = () => {
    const { id } = useParams()

    return (
        <>
            {products.map((e) => {
                if (e.id == id) {
                    return (
                        <>
                            <div className='bg-white'>

                                <div className="container flex p-4 md:flex-row flex-col  bg-white items-center gap-10">
                                    <div className="flex flex-col items-center w-1/2">
                                        <div>
                                            <img src={`${e.image}`} className='w-96' />
                                        </div>

                                    </div>
                                    <div className="w-3/4 flex flex-col gap-8 flex-1">
                                        <p className="font-bold text-4xl text-[#2c3e50]">{e.title}
                                        </p>
                                        <div className="flex gap-4 items-center">
                                            <div className="flex items-center text-white px-2 gap-1 py-1 rounded-lg bg-green-500 font-bold">
                                                <p>{e.rating}</p>
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <p className="text-[#2a7ddbb3] font-bold">{e.reviews} تقییمات</p>
                                        </div>
                                        <p className='font-bold text-gray-500 text-3xl'>الكمية</p>
                                        <div className='flex gap-2 flex-wrap'>
                                            <input type="number" name="" id="" className='border-2' />
                                            <button className='px-6 py-2 bg-[#2a7ddbb3] text-white font-bold text-sm md:text-xl lg:text-3xl rounded-sm'>إضافه الی سله التسوق</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container p-4">
                                <p className='font-bold text-4xl text-[#2c3e50]'>حول هذه السلعة</p>
                                <p className='text-xl mt-2 leading-normal  text-gray-500'>صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو مونيتور من ون اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم مع مغانط من النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح والنغمات العالية النقية صوت هاي فاي مثالي.
                                    يوفر التصميم المغلق من الخلف صوت هاي فاي غامر عالي الدقة برقاقة سي اس ار ومكبرات الصوت 40 ملم معًا، إنها أفضل من السماعات بخاصية إلغاء الصوت النشطة من حيث جودة الأصوات. صُممت وسائد الأذن المبطنة عالية الجودة خصيصًا لسماعات رأس الستوديو الاحترافية لتوفير أقصى قدر من الراحة وعزل الضوضاء. عصابة الرأس قابلة للتعديل وقابلة للتمدد من أجل إيجاد الزاوية المفضلة المرغوب فيها كي تلائمك.
                                    لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8 قدم ببنية قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى كرسيك المفضل. تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع كلاهما بتصميم قابل للفصل بالكامل، حيث يمكنك توصيل جهاز الدمج الصوتي الذي تريد استخدامه.
                                    مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن دوارة بزاوية 90 درجة لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس مرن وقابل للتعديل الذاتي، حيث توفر تجربة استماع خالية من التعب يمكن أن تدوم لساعات، مثالية لعشاق الموسيقى والدمج الصوتي.
                                    تعمل مع: ايباد وايبود وايفون واندرويد والعديد من أجهزة الصوت الأخرى. توفر صوت عالي الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه السماعات الرائعة خيارك المفضل.</p>
                            </div>
                        </>
                    )
                }
            })}
        </>
    )
}

export default Shop
