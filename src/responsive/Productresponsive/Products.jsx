import React, { useState } from "react";
// import styles from "../style/products/products.module.css";
import ProductsGallery from "../../components/firstpage/products/productsGallery/ProductsGallery";
import ProductsTab from "../../components/firstpage/products/productsTab/ProductsTab";

function Products() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="h-full w-full pt-5" >

      <div className="flex flex-col gap-[40px] p-6">
        <ProductsTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <ProductsGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Products;


