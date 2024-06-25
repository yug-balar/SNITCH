import React from 'react'

function Seasonal() {
    return (
        <>
            <div className='h-full w-full '>
                <div className='h-full w-full flex flex-col justify-center items-center gap-[50px]'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[30px] font-semibold'>SEASONAL FAV'S🌤️</h1>
                    </div>
                    <div className='grid grid-cols-4 items-center justify-center gap-8 h-full w-[90%] '>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl  ' data-aos="fade-up ">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/4MSS2710-07-M22.jpg?v=1703769341&width=360" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>BREEZEY LINEN</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl  ' data-aos="fade-up ">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/57fc3d10d65cc990ed4ea51b178f66eb.webp?v=1717670606&width=360" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>POLOS</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl  ' data-aos="fade-up ">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/4MSO4515-04-324.jpg?v=1696008288&width=360" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>T-SHIRTS</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl  ' data-aos="fade-up ">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/4MSR5005-06-32_4.jpg?v=1689845893&width=360" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>CROCHET SHIRTS</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seasonal