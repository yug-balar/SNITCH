import React from 'react'

function Trending() {
    const data = [
        {
            src: "https://www.snitch.co.in/cdn/shop/files/Linen-edit.jpg?v=1716814203&width=360",
            title: "BREEZEY LINEN"
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/POLO.jpg?v=1716814203&width=540",
            title: "POLOS"
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/Tees_new_1.jpg?v=1718086208&width=360",
            title: "T-SHIRTS"
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/Crochet-Shirts.jpg?v=1716814202&width=360",
            title: "CROCHET SHIRTS"
        }
    ]
    return (
        <>

            <div className='h-full w-full '>

                <div className='h-full w-full flex flex-col justify-center items-center gap-[50px]'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[30px] font-semibold'>TRENDING NOW 🫰</h1>
                    </div>
                    <div className='grid grid-cols-4 items-center justify-center gap-8 h-full w-[90%] '>
                        {
                            data.map((value, index) => {
                                return (
                                    <div className='flex relative h-full w-full gap-2 rounded-3xl' key={index} data-aos="fade-up">
                                        <img className='h-full w-full rounded-2xl' src={value.src} alt="" />
                                        <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>{value.title}</h1>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Trending