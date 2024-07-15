import { Button } from "flowbite-react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../bag/cartSlice";

function GalleryCard(props) {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ ...props.product, quantity: 1 }));
  }

  return (
    <div className="flex">
      <div className="flex ">
        <div data-aos="fade-up">
          <div >
            <img src={props.product.src} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[14px]">{props.product.title}</h3>
            <p className="text-[14px]">{props.product.Discount}</p>
            <div className="flex gap-2 text-[#6A6A6A]">
              <p className="text-[14px] ">{props.product.size}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">

            {/* <Button pill gradientDuoTone="pinkToOrange" onClick={handleAddToCart}>
              Add to cart
            </Button> */}
            <button className="h-[30px] w-full bg-[#F8F8F8]" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
