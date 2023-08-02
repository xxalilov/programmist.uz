import React, { useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import komp from "../pages/images/simple-png.webp";
import project1 from "../pages/images/project.png";
import project2 from "../pages/images/project-back.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

function PortfolioSlider() {
  const projectsSlider = useRef();
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    className: "notes-slider",
    autoplay: true,
    autoPlaySpeed: 9000,
  };
  const projects = [
    {
      id: 1,
      title:
        "Geo Go taksi ilovasi. Qulay hamda chiroyli dizaynga ega bo'lgan taksi platformasi.",
      parag: "Mobil dasturini ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=io.geo.go",
      image: project1,
      image2: project2,
    },
    {
      id: 2,
      title: "TozaUz Yurtimizni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.toza.tozauz",
      image: project1,
      image2: project2,
    },
    {
      id: 3,
      title: "Vita in line sog'ligimzni birga asraylik!!",
      parag: "Mobil dastur , Web Site ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=uz.hayot.vitaInLine&hl=ru&gl=US",
      image: project1,
      image2: project2,
    },
    {
      id: 4,
      title:
        "Allone shahar ichi hamda shaharlar aro taksi xizmati uchun maxsuz ilova.",
      parag: "Mobil dasturini ishlab chiqish.",
      link: "https://play.google.com/store/apps/details?id=io.geo.go",
      image: project1,
      image2: project2,
    },
  ];

  const gotoNextBtn = () => {
    projectsSlider?.current?.slickNext();
  };

  const gotoPrevBtn = () => {
    projectsSlider?.current?.slickPrev();
  };
  return (
    <div>
      <Slider
        {...settings}
        ref={projectsSlider}
        className="border rounded-[32px] bg-white w-[350px] md:w-[600px] lg:w-[1000px]"
      >
        {projects.map((item) => {
          return (
            <div
              key={item.id}
              className=" projects-slider mx-auto rounded-[32px]"
            >
              <div className="sm:w-[450px]   sm:text-left px-3 md:ml-[70px] sm:mt-[70px] mt-[40px]">
                <p className="uppercase font-[700] ml-[50px] sm:ml-auto">
                  Bizning
                  <span className="bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
                    portfolio
                  </span>
                </p>
                <h2 className="text-[25px] w-[300px] md:w-auto text-center mt-2 sm:text-[32px] font-[700] leading-8">
                  {item.title}
                </h2>
                <div className="flex">
                  <Image src={komp} alt="comp img" className="w-8 h-8 mt-2 " />
                  <p className="mt-4"> Bizning rolimiz</p>
                </div>
                <p className="mt-3 w-[280px] text-center sm:text-left sm:w-auto">
                  {item.parag}
                </p>
                <div className="flex justify-between mt-8 flex-wrap  sm:flex-auto">
                  <button className="flex ml-20 sm:ml-5 w-[350px]  text-center sm:w-auto  font-[600] items-center rounded-xl bg-[#F0F4F8] py-[14px] px-5 bg-gradient-to-r from-[#0677E1] to-[#8C1FE2]  bg-clip-text text-transparent">
                    <a href={item.link} target="blank">
                      Loyihani ko&apos;rish
                    </a>
                    <AiOutlineRight className="text-[12px] ml-2 text-[#8C1FE2]" />
                  </button>
                  <div className="text-center ml-[120px] sm:ml-0 sm:mr-0">
                    <button
                      className="text-[12px] mr-4 hover:text-white w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoPrevBtn()}
                    >
                      <AiOutlineLeft className="ml-[14px]" />
                    </button>
                    <button
                      className="text-[12px] hover:text-white text-center w-10 h-10 rounded-[40px] hover:bg-gradient-to-r hover:from-sky-600 hover:to-indigo-700"
                      onClick={() => gotoNextBtn()}
                    >
                      <AiOutlineRight className="ml-[14px]  font-bold" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:mt-8  sm:mb-0 ml-4 relative">
                <Image
                  src={item.image2}
                  alt="project 2"
                  className="w-[250px]  h-[150px] sm:w-[400px] md:w-[600px] md:ml-12 mt-6 lg:w-[400px] sm:h-[320px]"
                />
                <Image
                  src={item.image}
                  alt="statistika"
                  className="absolute z-[1] right-0 top-8 md:top-12 w-[250px] lg:w-[400px]"
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PortfolioSlider;
