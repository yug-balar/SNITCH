import React from 'react'

function OtherImage() {
    return (
        <>

            <div className='h-full w-full pt-6'>
                <div className='h-full w-full flex flex-col justify-center items-center gap-[50px]'>
                    <div className='grid grid-cols-4 items-center justify-center gap-8 h-full w-[90%] '>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl' data-aos="fade-up">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/4MSS2652-08-M13_1000x.jpg?v=1714461971" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>SNITCH LUXE</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl' data-aos="fade-up">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/4MSS2931-01-M25_1000x.jpg?v=1715069585" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>OVERSIZED SHIRTS</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl' data-aos="fade-up">
                            <img className='h-full w-full rounded-2xl' src="https://snitch.co.in/cdn/shop/files/4MSS2438-03-M64_1000x.jpg?v=1702288806" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>OVERSHIRTS</h1>
                        </div>
                        <div className='flex relative h-full w-full gap-2 rounded-3xl' data-aos="fade-up">
                            <img className='h-full w-full rounded-2xl' src="https://www.snitch.co.in/cdn/shop/files/Noir_1000x.jpg?v=1691769612" alt="" />
                            <h1 className='absolute z-50 text-[20px] font-semibold text-white bottom-[4%] right-[0px] left-[4%]'>PERFUMES</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OtherImage