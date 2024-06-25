import React from "react";

function GalleryCard(props) {
  return (
    <div className="flex">
      <div className="h-full w-full flex justify-around gap-0 p-3 items-center">
        <div className="flex flex-col" data-aos="fade-up">
          <div className="h-full w-auto object-cover">
            <img className="h-full w-full " src={props.src} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[13px] font-bold  text-[#000]">{props.title}</h3>
            <p className="text-[13px]  font-bold text-[#000]">{props.Discount}</p>
            <div className="flex gap-2 text-[#000]">
              <p className="text-[13px] ">{props.size}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
