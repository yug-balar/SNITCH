import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { shirts, trousers, tshirts } from "../../Data/productsPageData";
import ProductsTab from "../../components/firstpage/Otherproduct/productsTab/ProductsTab";

function OtherProductRepo() {
    const [activeTab, setActiveTab] = useState(0);


    // const newData = activeTab === 0 ? Kid : Children
    const newData = activeTab === 0 ? shirts : activeTab === 1 ? tshirts : trousers


    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="h-[100px] gap-3 w-full flex justify-center items-center">
                <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
            <div className="h-full w-full justify-center gap-2 items-center flex p-7">
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {newData.map((value, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="h-full object-cover">
                                    <img className="h-full w-auto" src={value.src} alt="" />
                                    <p>{value.title}</p>
                                    <h2>{value.Discount}</h2>
                                    <h2>{value.size}</h2>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                    {/* <SwiperSlide>

                        <div className='h-[400px] object-cover'>
                            <img className='h-full w-auto' src="https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205" alt="" />
                            <p>Bolid Black Striped Shirt</p>
                            <h2>INR 1,299</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='h-[400px] object-cover'>
                            <img className='h-full w-auto' src="https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205" alt="" />
                            <p>Bolid Black Striped Shirt</p>
                            <h2>INR 1,299</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='h-[400px] object-cover'>
                            <img className='h-full w-auto' src="https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205" alt="" />
                            <p>Bolid Black Striped Shirt</p>
                            <h2>INR 1,299</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='h-[400px] object-cover'>
                            <img className='h-full w-auto' src="https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205" alt="" />
                            <p>Bolid Black Striped Shirt</p>
                            <h2>INR 1,299</h2>
                        </div>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
}

export default OtherProductRepo;
