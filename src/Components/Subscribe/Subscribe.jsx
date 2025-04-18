import React from "react";
import Banner from "../../assets/website/OrangeBanner.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div className="bg-gray-300 text-white mb-20" style={BannerImg}>
      <div className="container backdrop-blur-sm  py-10">
        <div className="space-y-6  max-w-xl mx-auto">
          <h1
            className="text-2xl !text-center sm:text-left sm:text-4xl 
          font-semibold"
          >
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your Email "
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
