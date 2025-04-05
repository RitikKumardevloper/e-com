import React from "react";
import Img1 from "../../assets/footpic/women1.png";
import Img2 from "../../assets/footpic/women2.jpg";
import Img3 from "../../assets/footpic/women3.jpg";
import Img4 from "../../assets/footpic/women4.jpg";
import Img5 from "../../assets/footpic/women5.jpg";
import { FaStar } from "react-icons/fa";

let ProductData = [
  {
    id: 1,
    title: "Women Ethic",
    img: Img1,
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    title: "pride color",
    img: Img2,
    rating: 3.0,
    color: "yellow",
    aosDelay: "0",
  },
  {
    id: 3,
    title: "beauty girl",
    img: Img3,
    rating: 5.0,
    color: "blue",
    aosDelay: "0",
  },
  {
    id: 4,
    title: "preety cutie",
    img: Img4,
    rating: 5.0,
    color: "yellow",
    aosDelay: "0",
  },
  {
    id: 5,
    title: "obseverd cutie",
    img: Img5,
    rating: 5.0,
    color: "purple",
    aosDelay: "0",
  },
];
const Product = () => {
  return (
    <div className="mt-14 mb-12 flex">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary"> Top selling products for you</p>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem, ipsum dolor sit amet consectetur     adipisicing elit. Quas,
            sunt.
          </p>
        </div>
        {/* body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3
            md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5"
          >
            {/* card section */}
            {ProductData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              className="text-center mt-10 cursor-pointer bg-primary
             text-white py-1 px-5 rounded"
            >
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
