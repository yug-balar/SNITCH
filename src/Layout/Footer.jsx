

import React from 'react'

function Footer() {


    return (
        <div className='h-full w-full mt-10 border-t-[1px] border-black'>
            <div className='h-full grid grid-cols-4 gap-[7%] p-9 justify-start'>
                <div className='h-full w-full flex flex-col gap-[3%]'>
                    <div className='text-[14px]'>

                        <h2 className='tracking-[.25em]'>OFFLINE STORE</h2>
                    </div>
                    <div className='h-full gap-[2%] flex flex-col'>

                        <p className='text-[12px] underline hover:underline-offset-4'>Find Stores Near Me</p>
                    </div>
                </div>
                <div className='h-full w-full flex flex-col gap-[3%]'>
                    <div className='text-[14px]'>

                        <h2 className='tracking-[.25em]'>GET TO KNOW US</h2>
                    </div>
                    <div className='h-full gap-[2%] flex flex-col'>

                        <p className='text-[12px]'>Contact us</p>
                        <p className='text-[12px]'>FAQ's</p>
                        <p className='text-[12px]'>Blogs</p>
                        <p className='text-[12px]'>Terms & Conditions</p>
                    </div>
                </div>
                <div className='h-full w-full flex flex-col gap-[3%]'>
                    <div className='text-[14px]'>

                        <h2 className='tracking-[.25em]'>TRACK OR RETURN/EXCHANGE ORDER</h2>
                    </div>
                    <div className='h-full gap-[2%] flex flex-col'>

                        <p className='text-[12px]'>TRACK ORDER</p>
                        <p className='text-[12px]'>PLACE RETURN/EXCHANGE REQUEST</p>
                        <p className='text-[12px]'>RETURNS/EXCHANGE POLICY</p>
                    </div>
                </div>
                <div className='h-full w-full flex flex-col gap-[3%]'>
                    <div className='text-[14px]'>

                        <h2 className='tracking-[.25em]'>CUSTOMER CARE</h2>
                    </div>
                    <div className='h-full gap-[2%] flex flex-col'>

                        <p className='text-[12px]'>Timings: 10 AM - 7 PM (Mon - Sat)</p>
                        <p className='text-[12px]'>Whatsapp :<span className='underline hover:underline-offset-4'>+91 6366966283</span> </p>
                        <p className='text-[12px]'>Instagram: @snitch.co.in</p>
                    </div>
                </div>

            </div>
            <div className='h-full w-full flex flex-col p-9 gap-[20px] justify-start'>
                <div className='flex flex-col gap-[10px]'>
                    <h3 className='text-black font-semibold tracking-widest'>SIGN UP AND SAVE</h3>
                    <h3 className='text-black font-bold '>Sign up now and be the first to know about exclusive offers, latest fashion trends & style tips!</h3>
                </div>
                <div className='flex h-[40px] w-[50%]'>
                    <input className='h-full w-[50%] focus:outline-none text-black placeholder:text-black border-b-2 border-black' type="text" placeholder='Enter your email' />
                </div>
                <div className='flex h-full w-full gap-[1%]'>
                    <img className='h-[25px]' src="/image/instagram.png" alt="" />
                    <img className='h-[25px]' src="/image/facebook.png" alt="" />
                    <img className='h-[25px]' src="/image/youtube.png" alt="" />
                    <img className='h-[25px]' src="/image/twitter.png" alt="" />
                    <img className='h-[25px]' src="/image/pinterest.png" alt="" />
                    <img className='h-[25px]' src="/image/linkedin.png" alt="" />
                </div>
            </div>
            <div className='h-full w-full pb-11 flex flex-col justify-center items-center'>
                <h1>© 2024 SNITCH</h1>
                <h1>Made in India, for the World 🌍</h1>
            </div>
        </div>
    )
}

export default Footer