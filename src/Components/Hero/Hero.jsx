import React from "react";
import img3 from "../../assets/Hero/women1.png";
import img2 from "../../assets/Hero/women2.png";
import img1 from "../../assets/Hero/sale.png";
import Slider from "react-slick";

const imgList = [
  {
    id: 1,
    img: img1,
    title: "upto 50% off on all Women Wears",
    desc: "Women's wear encompasses a vast and diverse world of clothing, reflecting cultural traditions, personal styles, and evolving trends. From the iconic elegance of a saree to the practicality of jeans and the comfort of a salwar kameez, women's clothing offers a rich tapestry of expression. ",
  },
  {
    id: 2,
    img: img2,
    title: "upto 50% off on all Men Wears",
    desc: "Women's wear encompasses a vast and diverse world of clothing, reflecting cultural traditions, personal styles, and evolving trends. From the iconic elegance of a saree to the practicality of jeans and the comfort of a salwar kameez, women's clothing offers a rich tapestry of expression. ",
  },
  {
    id: 3,
    img: img3,
    title: "upto 50% off on all Wears",
    desc: "Women's wear encompasses a vast and diverse world of clothing, reflecting cultural traditions, personal styles, and evolving trends. From the iconic elegance of a saree to the practicality of jeans and the comfort of a salwar kameez, women's clothing offers a rich tapestry of expression. ",
  },
];

let settings = {
  dots: false,
  arrow: false,
  infinite: true,
  speed: 800,
  slidersToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1600,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  PauseOnFocuse: true,
};
const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[550px] 
    sm:min-h-[650px] bg-gray-300 flex justify-center items-center dark:bg-gray-800 duration-200"
    >
      {/* BackGround pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40
      absolute -top-1/2 right-0 rounded-3xl rotate-45
      "
      ></div>
      {/* hero action */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {imgList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center
             sm:text-left order-2 sm:order-1 relative z-10 "
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm">{data.desc}</p>
                  <div>
                    <button
                      className="bg-gradient-to-r  from-primary to-secondary 
                hover:scale-105 duration-200 text-white rounded-full py-2 px-4"
                    >
                      Order now
                    </button>
                  </div>
                </div>
                {/* img content section */}
                <div className="order-1 sm:order-2 ">
                  <div className=" relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] sm:h-[450px] sm:w-[450px]
                   sm:scale-125 object-contain mx-auto "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Hero;
