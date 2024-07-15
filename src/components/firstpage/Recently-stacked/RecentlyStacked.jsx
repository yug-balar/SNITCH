import React from 'react'

function RecentlyStacked() {

    const data = [
        {
            src: "https://www.snitch.co.in/cdn/shop/files/648d79a94b5eb766c669a4f000fef8ac.webp?v=1717591205",
            title: "Bodil Black Striped Shirt",
            Discount: "INR 799",
            size: "S, M, L, XL, XLL",
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/ca3cfac9adcbd567acd6e4293a94d00e.webp?v=1717596217",
            title: "Bodil Navy Striped Shirt",
            Discount: "INR 749",
            size: "S, M, L, XL, XLL",
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/397a84c7c3df9564fa5263086949b28d.webp?v=1717584449",
            title: "Bodil Peach Striped Shirt",
            Discount: "INR 1,799",
            size: "S, M, L, XL, XLL",
        },
        {
            src: "https://www.snitch.co.in/cdn/shop/files/f4e10fae62de1a0fb3de41de56fc390a.webp?v=1717591545",
            title: "Bodil Grey Striped Shirt",
            Discount: "INR 1,199",
            size: "S, M, L, XL, XLL",
        },
    ]


    return (
        <>

            <div className='h-full w-full pt-6'>
                <div className='h-full w-full flex flex-col justify-center items-center gap-[50px]'>
                    <div className='flex justify-center items-center'>
                        <h1 className='text-[30px] font-bold'>RECENTLY STACKED</h1>
                    </div>
                    <div className='grid grid-cols-4 items-center justify-center gap-8 h-full w-[90%] '>
                        {
                            data.map((value, index) => {
                                return (
                                    <div className="flex flex-col" key={index} data-aos="fade-up">
                                        <div className="h-full w-auto object-cover">
                                            <img className="h-full w-full " src={value.src} alt="" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-[13px] font-bold  text-[#000]">{value.title}</h3>
                                            <p className="text-[13px]  font-bold text-[#000]">{value.Discount}</p>
                                            <div className="flex gap-2 text-[#000]">
                                                <p className="text-[13px] ">{value.size}</p>
                                            </div>
                                        </div>
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

export default RecentlyStacked