import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import {
  Kid,
  Children,
} from "../../../../Data/productsPageData";

function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    Kid,
    Children,
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 5, 900: 5 }}>
      <Masonry gutter="16px">
        {products[activeTab].map(function (img, index) {
          return (
            <>
              <GalleryCard key={index} src={img.src} title={img.title} Discount={img.Discount} size={img.size} />
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
