import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate("/searchbar");
    }



    return (
        <div className='h-[100px] w-full flex items-center justify-between p-7 fixed z-50 bg-white'>

            <div className='h-full  object-cover flex items-center justify-center'>
                <img className='h-[30px] cursor-pointer w-auto hover:translate-x-3 duration-700 ease-in-out' src="/image/bars.png" alt="" />
            </div>
            <div className='h-full  flex items-center justify-center'>
                <Link to="/">

                    <img className='h-[60px] w-auto' src="https://www.snitch.co.in/cdn/shop/files/blackoption.png?v=1659016547" alt="" />
                </Link>
            </div>
            <div className='flex h-full  items-center justify-center gap-[15px]'>
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
        </div>
    )
}

export default Navbar