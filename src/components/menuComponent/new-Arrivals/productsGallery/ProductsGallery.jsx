import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import GalleryCard from "./GalleryCard";
import { arrivals } from "../../../../Data/newArrivals";
function ProductsGallery(props) {
  const { activeCategory } = props;

  console.log("activeCategory", activeCategory);
  console.log("arrivals", arrivals)
  console.log("filtered", arrivals.filter((value) => {
    return value.category === activeCategory.toLowerCase()
  }));

  return (
    <>

      {arrivals.filter((value) => {
        return value.category == activeCategory.toLowerCase()
      }).map(function (value, index) {
        return (
          <GalleryCard key={index} src={value.src} title={value.title} Discount={value.discount} size={value.size} />
        );
      })}
    </>
  );
}

export default ProductsGallery;
