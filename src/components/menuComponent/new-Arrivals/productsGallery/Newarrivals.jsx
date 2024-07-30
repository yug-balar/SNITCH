import React, { useState } from 'react';
import { arrivals } from "../../../../Data/newArrivals";
import ProductsTab from '../productsTab/ProductsTab';
import ProductsGallery from './ProductsGallery';

function Newarrivals() {
    const product = arrivals;
    const [activeCategory, setActiveCategory] = useState("");

    console.log(activeCategory);

    return (
        <div className='h-full w-full flex flex-row-reverse'>
            <div className='h-full w-[20%] fixed top-[85px] left-0 bottom-0 right-0'>
                <div className="h-full w-full overflow-y-scroll  flex flex-col gap-3 bg-white">
                    <div className="flex flex-col gap-3 border-b-[1px] pl-6 border-[#ECEDF0]">
                        <div className="flex flex-col w-full h-full gap-1 p-2">
                            <ProductsTab activeTab={activeCategory} setActiveTab={setActiveCategory} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-[80%] flex items-end justify-end px-5'>

                <div className='grid grid-cols-4 h-full w-full gap-0'>
                    <ProductsGallery activeCategory={activeCategory} />
                </div>
            </div>

        </div>

    )
}

export default Newarrivals

// import React, { useState } from "react";
// // import styles from "../style/products/products.module.css";
// import ProductsGallery from "./ProductsGallery";
// import ProductsTab from "../productsTab/ProductsTab";

// function Otherproduct() {
//     const [activeTab, setActiveTab] = useState(0);
//     return (
//         <div className="h-full w-full pt-20">

//             <div className="flex flex-col gap-[40px] p-6">
//                 <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
//                 <ProductsGallery activeTab={activeTab} />
//             </div>
//         </div>
//     );
// }

// export default Otherproduct;
