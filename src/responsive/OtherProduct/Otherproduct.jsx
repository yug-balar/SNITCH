import React, { useState } from "react";
// import styles from "../style/products/products.module.css";
import ProductsGallery from "../../components/firstpage/Otherproduct/productsGallery/ProductsGallery";
import ProductsTab from "../../components/firstpage/Otherproduct/productsTab/ProductsTab";

function Otherproduct() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="h-full w-full pt-20">

            <div className="flex flex-col gap-[40px] p-6">
                <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
                <ProductsGallery activeTab={activeTab} />
            </div>
        </div>
    );
}

export default Otherproduct;
