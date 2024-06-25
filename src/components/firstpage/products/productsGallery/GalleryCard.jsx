import React from "react";

function GalleryCard(props) {
  return (
    <div className="flex">
      <div className="flex ">
        <div data-aos="fade-up">
          <div >
            <img src={props.src} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[13px]">{props.title}</h3>
            <p className="text-[13px]">{props.Discount}</p>
            <div className="flex gap-2 text-[#6A6A6A]">
              <p className="text-[13px] ">{props.size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
