import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {

    useGSAP(() => {
        gsap.to("#search", { width: '100%' })
        gsap.to("#section", { height: '100%', delay: 2 })
    }, [])

    const navigate = useNavigate()

    const gotToNewPage = () => {
        navigate("/");
    }

    const recent = [
        {
            title: "kurta",
        },
        {
            title: "t shirt",
        },
        {
            title: "black shirt",
        },
    ];

    const popular = [
        {
            title: "t shirt",
        },
        {
            title: "linen",
        },
        {
            title: "half shirt",
        },
        {
            title: "black shirt",
        },
        {
            title: "cargo",
        },
        {
            title: "shirt",
        },
        {
            title: "kurta",
        },
        {
            title: "jeans",
        },
        {
            title: "polo",
        },
        {
            title: "shirts",
        },
    ];

    const data = [
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2242-01-M24.jpg?v=1709549851",
            title: "Sleek Striped Black polo T-Shirts",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Snitch_March22_2327-1.jpg?v=1701269999",
            title: "Original Black Bootcut Denim",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSD3696-01-3226.jpg?v=1716968450",
            title: "Frosty White Baggy Fit Jeans",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/01_6fce8444-9c53-44c6-b340-fb9abf2e0ccb.jpg?v=1660722754",
            title: "Jet Black Jeans",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS3112-02-M28.jpg?v=1718277292",
            title: "Morten Navy Velvet Shirt",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2242-04-M29.jpg?v=1709550466",
            title: "Sleek Striped White Polo T-Shirt",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSD3585-01-325607.jpg?v=1683972079",
            title: " Heft Sky Blue Cargo Baggy",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/bcaac71cd5f6c55638e3c86f39933bea.webp?v=1718971920",
            title: "Baldassare Brown Knitted Polo T-Shirts",
        },
        {
            src: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/30b2cbde2589748904c6e8dfa8c8f33e.webp?v=1715148195",
            title: "Scorcher White Touser",
        },
    ];
    return (
        <div id="search" className=" h-screen  transition ease-in-out delay-1000 bg-[#FAFAFA] w-[0%] flex items-center justify-center ">
            <div className="h-[95%] w-[95%] p-5 flex flex-col gap-5">
                <div className="h-[90px] w-full bg-white flex justify-center gap-5 items-center rounded-lg">
                    <div className="h-[100px] w-[90%] flex justify-center items-center relative">
                        <input
                            type="text"
                            className="flex flex-grow h-[50%] w-full rounded-full pl-14 bg-[#F8F8F8] border-[0.5px] border-gray-400 shadow-[0px_0px_3px_2px_rgba(147,147,147,0.3)]"
                            placeholder="Search"
                        />
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="absolute left-6"
                        />
                    </div>
                    <div>
                        <img onClick={() => gotToNewPage()} className="h-full cursor-pointer w-full hover:rotate-[90deg] ease-in-out duration-700" src="./image/close.png" alt="" />
                    </div>
                </div>
                <div className="flex h-full w-full gap-5">
                    <div className="h-[480px] w-[40%]  overflow-scroll p-4 flex flex-col gap-3 bg-white">
                        <div className="flex flex-col gap-3 border-b-[1px] border-gray-500">
                            <div>
                                <h1 className="font-extrabold text-[#7a7a7a]">
                                    RECENT SEARCHES
                                </h1>
                            </div>
                            <div className="flex flex-col w-full h-full gap-1">
                                {recent.map((value, index) => {
                                    return <h3 key={index} className="font-[100]">{value.title}</h3>;
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3  ">
                            <div>
                                <h1 className="font-extrabold text-[#7a7a7a]">
                                    POPULAR SEARCHES
                                </h1>
                            </div>
                            <div className="flex flex-col w-full h-full gap-2">
                                {popular.map((value, index) => {
                                    return (
                                        <h3 key={index} className="text-black font-light">
                                            {value.title}
                                        </h3>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div id="section" className="h-[0%] w-full p-6 bg-white">
                        <div className="flex flex-col mb-2 font-semibold">
                            <h2 className="text-[#7a7a7a] font-extrabold">TRENDING NOW</h2>
                        </div>
                        <div className="h-full w-full ml-5 mr-5">
                            <div className="grid grid-cols-3 gap-[20px] justify-center items-center">
                                {data.map((value, index) => {
                                    return (
                                        <div key={index} className="h-full w-full flex gap-3">
                                            <div>
                                                <img
                                                    className="h-[120px] w-[90px] rounded-lg"
                                                    src={value.src}
                                                    alt=""
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-[13px] font-semibold">
                                                    {value.title}
                                                </h4>
                                                <h4>
                                                    ⭐⭐⭐⭐⭐<span></span>
                                                </h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
