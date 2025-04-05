import React from "react";
import Img1 from "../../assets/bestproduct/shirt1.png";
import Img2 from "../../assets/bestproduct/shirt2.png";
import Img3 from "../../assets/bestproduct/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    title: "Men Ethic",
    img: Img1,
    desc: "Elegant traditional wear for men.",
    rating: 4,
  },
  {
    id: 2,
    title: "Lining Shirt",
    img: Img2,
    desc: "Stylish and comfortable striped shirt.",
    rating: 5,
  },
  {
    id: 3,
    title: "Beauty Girl",
    img: Img3,
    desc: "Trendy and fashionable attire for women.",
    rating: 3,
  },
];

const TopProducts = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="text-left mb-10">
        <p className="text-sm text-primary font-semibold uppercase">
          Top Rated Products
        </p>
        <h1 className="text-3xl font-bold text-gray-800">Best Products</h1>
        <p className="text-sm text-gray-500 max-w-md">
          Discover the best-selling products with top-notch quality and style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {ProductData.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white hover:bg-black/90 hover:text-white cursor-pointer relative items-center
            shadow-lg transition-all duration-300 ease-in-out group p-5 max-w-sm text-center"
          >
            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="w-40 h-auto"
              />
            </div>

            {/* Details Section */}
            <div className="mt-4">
              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < product.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <h1 className="text-lg font-bold">{product.title}</h1>
              <p className="text-sm text-gray-600 group-hover:text-white mt-2">
                {product.desc}
              </p>
              <button className="bg-primary rounded-full py-1 px-4 group-hover:bg-white 
              mt-4 group-hover:text-primary text-white">
                Order here
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
