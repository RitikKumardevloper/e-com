import React from "react";
import BannerImg from "../../assets/footpic/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
const Banner = () => {
  return (
    <div
      className="min-h-[500px] flex justify-center
    items-center py-12 sm:py-0"
    >
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div>
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400] h-[350] w-full mx-auto 
            drop-shadow-[-10px_10px_12px_rgba(0,0,01)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl font-bold">
              Winter sale upto 50% Off
            </h1>
            <p className="text-sm text-gray-600 tracking-wide leading-5 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              flex flex-col gap-4 voluptatibus architecto quos, harum cum.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12  shadow-sm p-4
                bg-violet-100 rounded-full"
                />
                <p>Quality Products</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12  shadow-sm p-4
                bg-orange-100
                rounded-full "
                />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12  shadow-sm p-4
                bg-blue-100
                rounded-full "
                />
                <p>Easy Payment Method</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12  shadow-sm p-4
                bg-green-100
                rounded-full "
                />
                <p>Get Offers</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
