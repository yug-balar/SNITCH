import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import { shirts, trousers, tshirts } from "../../../../Data/productsPageData";
function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    shirts,
    tshirts,
    trousers
  ];
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 4, 900: 4 }}>
      <Masonry gutter="-6px">
        {products[activeTab].map(function (value, index) {
          return (
            <>
              <GalleryCard key={index} product={value} />
            </>
          );
        })}
      </Masonry>
      <div className="h-[150px] w-full flex items-center justify-center ">
        <button className="bg-white text-black border border-gray-400 p-1.5">view more</button>
      </div>
    </ResponsiveMasonry>
  );
}

export default ProductsGallery;
