import React from "react";

function GalleryCard(props) {
  return (
    <div className='h-full w-full flex items-end justify-end '>
      <div className='flex items-center justify-center gap-3 h-full w-[90%] pt-10 '>
        <div className='flex flex-col h-full w-full gap-1'>
          <img className='h-[350px] w-[300px] object-cover' src={props.src} alt="" />
          <h1 className=' z-50 text-[15px] font-light text-black bottom-[4%] right-[0px] left-[4%]'>{props.title}</h1>
          <p className="text-[14px]">{props.Discount}</p>
          <div className="flex gap-2 text-[#6A6A6A]">
            <p className="text-[14px] ">{props.size}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default GalleryCard;

{/* <div className='flex flex-col h-full w-full gap-1 rounded-3xl  '>
<img className='h-[350px] w-full ' src={props.src} alt="" />
<h1 className=' z-50 text-[15px] font-semibold text-black bottom-[4%] right-[0px] left-[4%]'>{props.title}</h1>
<p className="text-[14px]">{props.Discount}</p>
<div className="flex gap-2 text-[#6A6A6A]">
  <p className="text-[14px] ">{props.size}</p>
</div>
</div> */}
