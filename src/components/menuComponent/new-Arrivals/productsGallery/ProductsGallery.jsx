import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import { arrivals } from "../../../../Data/newArrivals";
function ProductsGallery(props) {
  const { activeTab } = props;

  return (
    <>
      {arrivals.filter((value) => {
        return value.category == activeTab
      }).map(function (value, index) {
        return (
          <GalleryCard key={index} src={value.src} title={value.title} Discount={value.Discount} size={value.size} />
        );
      })}
    </>
  );
}

export default ProductsGallery;
