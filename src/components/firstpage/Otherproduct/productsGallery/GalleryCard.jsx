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
      <div className="h-full w-full flex justify-around gap-0 p-3 items-center">
        <div className="flex flex-col" data-aos="fade-up">
          <div className="h-full w-auto object-cover">
            <img className="h-full w-full " src={props.product.src} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[13px] font-black tracking-[1.5px]  text-[#000]">{props.product.title}</h3>
            <p className="text-[13px]  font-black tracking-[1.5px] text-[#000]">{props.product.Discount}</p>
            <div className="flex gap-2 text-[#000]">
              <p className="text-[13px] font-black ">{props.product.size}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">


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
