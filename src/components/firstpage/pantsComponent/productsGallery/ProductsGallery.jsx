import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { coords, pyjamas, shorts } from "../../../../Data/productsPageData";
import GalleryCard from "./GalleryCard";


function ProductsGallery(props) {
  const { activeTab } = props;
  const products = [
    shorts,
    coords,
    pyjamas
  ];

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 4, 900: 4 }}>
      <Masonry gutter="-6px">
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
