import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuBar from '../components/SearchBar/MenuBar';

function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

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
    const changeBackground = () => {
        if (window.scrollY >= 10) {
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

            <div className={navbar ? 'h-[100px] w-full flex items-center justify-between p-7 fixed z-50 bg-white transition ease-in-out duration-1000 delay-150' : 'h-[100px] w-full flex items-center justify-between p-7 z-50 bg-white  transition ease-in-out duration-1000 delay-150'}>
                <div className='h-full  object-cover flex items-center justify-center ' onClick={() => toggleMenu()}>
                    <img className='h-[30px] cursor-pointer w-auto hover:translate-x-3 duration-300 ease-in-out' src="/image/bars.png" alt="" />
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
                    <div id='searchBar'>
                        <img onClick={() => gotToNewPage()} className='h-[30px] w-auto' src="/image/search2.png" alt="" />
                    </div>
                    <div>
                        <img className='h-[25px] w-auto' src="/image/like.png" alt="" />
                    </div>
                    <div>
                        <img className='h-[25px] w-auto' src="/image/bag2.png" alt="" />
                    </div>
                </div>
                {isVisible && <MenuBar toggleMenu={toggleMenu} />}
            </div>

        </>
    )
}

export default Navbar