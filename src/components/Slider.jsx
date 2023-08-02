import React, { useRef } from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Geo from "../pages/images/photo_g.jpg";
import One from "../pages/images/photo1.jpg";
import Clear from "../pages/images/photo_toza.jpg";
import Vite from "../pages/images/photo_vite.jpg";
import Daryo from "../pages/images/image_d.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProductSlider() {
  const customeSlider = useRef();
  const sliderItems = [
    { id: 1, image: Geo },
    { id: 2, image: One },
    { id: 3, image: Clear },
    { id: 4, image: Vite },
    { id: 5, image: Daryo },
  ];
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    customeSlider?.current?.slickNext();
  };

  const gotoPrev = () => {
    customeSlider?.current?.slickPrev();
  };
  return (
    <div className="relative lg:w-[1000px] md:w-[800px] ">
      <button
        onClick={() => gotoPrev()}
        className="border z-[1] bg-white md:left-[50px] ml-[20px] mt-[75px] lg:ml-5 text-[12px] absolute text-[#0677E1] mr-4 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-[#0677E1] hover:to-[#8C1FE2]"
      >
        <AiOutlineLeft className="ml-[14px] " />
      </button>
      <Slider
        {...settings}
        ref={customeSlider}
        className="text-center ml-[70px]"
      >
        {sliderItems.map((item) => {
          return (
            <div key={item.id} className="flex mx-3 justify-between mt-8 ">
              <div className="flex justify-center items-center bg-white w-[180px] h-[120px] rounded-[18px] mx-2">
                <Image
                  src={item.image}
                  alt="uzum foto"
                  className="w-[120px] h-[80px] md:w-[120px] md:h-[80px] rounded-[18px]"
                />
              </div>
            </div>
          );
        })}
      </Slider>
      <button
        onClick={() => gotoNext()}
        className="border z-[1] bg-white  absolute right-[5px] top-[75px] text-[12px] text-[#0677E1] mr-7  md:mr-2 lg:mr-0 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-[#0677E1] hover:to-[#8C1FE2]"
      >
        <AiOutlineRight className="ml-[14px]" />
      </button>
    </div>
  );
}

export default ProductSlider;
