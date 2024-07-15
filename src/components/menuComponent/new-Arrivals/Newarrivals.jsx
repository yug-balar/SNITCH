import React from 'react'
import { arrivals } from "../../../Data/newArrivals"

function Newarrivals() {
    const product = arrivals;
    const menudata = [
        {
            title: "NEW ARRIVALS",
            link: "arrivals"
        },
        {
            title: "BEST SELLING",
            link: "arrivals"

        },
        {
            title: "SNITCH LUXE",
            link: "arrivals"

        },
        {
            title: "SUITS & BLAZERS",
            link: "arrivals"

        },
        {
            title: "SHOP",
            link: "arrivals"

        },
        {
            title: "TRACK ORDER",
            link: "arrivals"

        },
        {
            title: "PLACE A RETURN / EXCHANGE REQUEST",
            link: "arrivals"

        },
        {
            title: "COUSTOMER SUPPORT",
            link: "arrivals"

        },
        {
            title: "VISIT MORE",
            link: "arrivals"

        },
        {
            title: "RELOVE",
            link: "arrivals"

        }
    ]
    return (
        <div className='h-full w-full flex flex-row-reverse'>
            <div className='h-full w-[25%] fixed top-[85px] left-0 bottom-0 right-0'>
                <div className="h-full w-full overflow-y-scroll  flex flex-col gap-3 bg-white">
                    <div className="flex flex-col gap-3 border-b-[1px] pl-6 border-[#ECEDF0]">
                        <div className="flex flex-col w-full h-full gap-1 p-2">
                            {menudata.map((value, index) => {
                                return (
                                    <>
                                        <hr />
                                        <div className='flex h-full w-full items-center'>
                                            {/* <Link to={value.link}> */}
                                            <h3 key={index} className="font-[100] text-[19px] p-2">{value.title}</h3>
                                            {/* </Link> */}

                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-[75%] flex items-end justify-end px-5'>

                <div className='grid grid-cols-4 h-full w-full '>
                    {
                        product.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center justify-center gap-8 h-full w-[90%] pt-10 '>
                                    <div className='flex flex-col h-full w-full gap-1 rounded-3xl  '>
                                        <img className='h-[350px] w-full ' src={item.src} alt="" />
                                        <h1 className=' z-50 text-[15px] font-semibold text-black bottom-[4%] right-[0px] left-[4%]'>{item.title}</h1>
                                        <p className="text-[14px]">{item.Discount}</p>
                                        <div className="flex gap-2 text-[#6A6A6A]">
                                            <p className="text-[14px] ">{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Newarrivals