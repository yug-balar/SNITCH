import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

function MenuBar({ toggleMenu }) {
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
        <div className={'fixed top-0 left-0 right-0 bottom-0 h-screen w-full flex items-center justify-between !z-[1000] transition ease-in-out duration-1000 delay-150 overflow-hidden'}>
            <div className='h-full w-[450px] bg-white'>
                <div className='h-[90px] w-full flex items-center justify-between px-3 py-10'>
                    <div className='flex gap-3 items-center justify-center'>
                        <div className='h-[30px] w-[30px] rounded-full flex items-center justify-center bg-gray-500'><FontAwesomeIcon icon={faUser} /></div>
                        <h3>LOG IN</h3>
                    </div>
                    <div onClick={toggleMenu}>
                        <img className="h-[20px] cursor-pointer w-full hover:rotate-[90deg] ease-in-out duration-700" src="./image/close.png" alt="" />
                    </div>
                </div>
                <div className='h-full w-full flex flex-col bg-white '>
                    <div className="h-[545px] w-full overflow-y-scroll  flex flex-col gap-3 bg-white">
                        <div className="flex flex-col gap-3 border-b-[1px] pl-6 border-[#ECEDF0]">
                            <div className="flex flex-col w-full h-full gap-1 p-2">
                                {menudata.map((value, index) => {
                                    return (
                                        <>
                                            <hr />
                                            <div className='flex h-full w-full items-center'>

                                                <h3 key={index} className="font-[100] text-[19px] p-2">{value.title}</h3>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='h-full w-full'>
                            <table className='h-full w-full grid grid-cols-3'>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/instagram.png" alt="" />
                                </div>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/facebook.png" alt="" />
                                </div>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/youtube.png" alt="" />
                                </div>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/twitter.png" alt="" />
                                </div>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/pinterest.png" alt="" />
                                </div>
                                <div className='h-[70px] border-[0.2px] border-[#ECEDF0] w-full flex justify-center items-center'>
                                    <img src="/image/linkedin.png" alt="" />
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-white h-full w-full opacity-75'>
            </div>
        </div>
    )
}

export default MenuBar