import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import MenuBar from '../components/SearchBar/MenuBar';
import { DrawerBag } from '../components/bag/Drawer';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {

        if (!isOpen) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
        setIsOpen(!isOpen)
    };

    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate("/searchbar");
    }

    const toggleMenu = () => {
        // navigate("/menupage");
        if (!isVisible) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
        setIsVisible(!isVisible)
    }

    const gotToWishlist = () => {
        navigate("/wishlist");
    }
    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    const menudata = [
        {
            title: "NEW ARRIVALS"
        },
        {
            title: "BEST SELLING"
        },
        {
            title: "SNITCH LUXE"
        },
        {
            title: "SUITS & BLAZERS"
        },
        {
            title: "SHOP"
        },
        {
            title: "TRACK ORDER"
        },
        {
            title: "PLACE A RETURN / EXCHANGE REQUEST"
        },
        {
            title: "COUSTOMER SUPPORT"
        },
        {
            title: "VISIT MORE"
        },
        {
            title: "RELOVE"
        }
    ]



    return (
        <>
            <div className='h-8 bg-black flex items-center justify-center text-white w-full'>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: "5000",
                        disableOnInteraction: false
                    }}
                    modules={[Pagination, Autoplay]}
                    className='h-full w-full flex items-center justify-center'
                >
                    <SwiperSlide className='h-full w-full flex items-center justify-center text-[10px] text-white tracking-[3px] font-extrabold'>
                        <h2>FLAT 10% OFF ON YOUR 1ST APP PURCHASE <span className='underline text-[12px]'>DOWNLOAD APP</span></h2>
                    </SwiperSlide>
                    <SwiperSlide className='h-full w-full flex items-center justify-center text-[10px] text-white tracking-[3px] font-extrabold'>
                        <h2>FLAT 40% OFF ON SELEXT COLLECTION <span className='underline text-[12px]'>USE CODE : WOW40</span></h2>

                    </SwiperSlide>
                    <SwiperSlide className='h-full w-full flex items-center justify-center text-[10px] text-white tracking-[3px] font-extrabold'>
                        <h2>GET FLAT 20% OFF ON PERCHASE OF Rs. 3999. USE CODE :FLAT20 <span className='underline text-[12px]'>USE CODE :BUY4</span></h2>

                    </SwiperSlide>
                </Swiper>
            </div>

            <div className={navbar ? 'h-[85px] w-full flex items-center justify-between p-7 sticky top-0 bottom-0 right-0 left-0 z-50 bg-white' : 'h-[85px] w-full flex  z-50 items-center justify-between p-7 bg-white'}>
                <div className='h-full  object-cover flex items-center justify-center hover:translate-x-3 duration-300 ease-in-out' onClick={() => toggleMenu()}>
                    <img className='h-[30px] cursor-pointer w-auto ' src="/image/bars.png" alt="" />
                </div>
                <div className='h-full  flex items-center justify-center'>
                    <Link to="/">

                        <img className='h-[60px] w-auto' src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="" />
                    </Link>
                </div>
                <div className='flex h-full  items-center justify-center gap-[15px] cursor-pointer'>
                    <div>
                        <Link to="login">
                            <img className='h-[25px] w-auto' src="/image/user2.png" alt="" />
                        </Link>
                    </div>
                    <div id='searchBar' onClick={() => gotToNewPage()}>
                        <img className='h-[30px] w-auto' src="/image/search2.png" alt="" />
                    </div>
                    <div onClick={() => gotToWishlist()}>
                        <img className='h-[25px] w-auto' src="/image/like.png" alt="" />
                    </div>
                    <div onClick={toggleDrawer}>
                        <img className='h-[25px] w-auto' src="/image/bag2.png" alt="" />
                    </div>
                </div>
                {isVisible && <MenuBar toggleMenu={toggleMenu} />}
                {isOpen && <DrawerBag isOpen={isOpen} toggleDrawer={toggleDrawer} />}
            </div>

        </>
    )
}

export default Navbar