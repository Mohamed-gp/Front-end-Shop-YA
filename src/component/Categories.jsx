import { faClock } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Categories = () => {

    return (
        <>
            <div className="container flex flex-wrap justify-between gap-4 p-4">
                <div className="flex flex-col items-center justify-end w-full gap-2 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/m12.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">الجوالات</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/l4.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">اللابتوبات</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o19.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">أجهزه للارتداء</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o20.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">السماعات</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/jordan2.png" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">الاحذية الرياضية</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o24.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">الساعات</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o24.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">الأثاث</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o4.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">قرطاسیه</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/pngaaa.png" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">ازياء نسائية</p>
                </div>
                
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/pngaaam.png" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">ازياء رجالية</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/sport.png" alt="" className="mx-auto w-28 h-36"/>
                    <p className="text-lg font-bold text-center">ملابس ریاضیه</p>
                </div>
                <div className="flex flex-col items-center justify-end w-full gap-4 p-8 bg-white rounded-lg lg:w-44">
                    <img src="/assets/products/category/o23.jpg" alt="" className="mx-auto w-28"/>
                    <p className="text-lg font-bold text-center">النظافة</p>
                </div>
            </div>
            <div className="container px-4 flex my-4 items-center gap-2 lg:text-2xl font-bold text-base">
                <p>عروض کبیره للیوم</p>
                <FontAwesomeIcon icon={faClock} className="text-red-500"/>
                <p className="text-red-500">ل 24 ساعه بس</p>
            </div>
        </>
    )
}

export default Categories