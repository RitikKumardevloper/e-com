import React from "react";
import Logo from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosCart } from "react-icons/io";
import { PiCaretDownFill } from "react-icons/pi";
import { link } from "framer-motion/client";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Women Wear",
    link: "/#",
  },
];
const DropDownLinks = [
  {
    id: 1,
    name: "TrendingProducts",
    link: "/#",
  },
  {
    id: 2,
    name: "BestSellingProducts",
    link: "/#",
  },
  {
    id: 3,
    name: "TopRated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <nav
      className="shadow-md bg-white dark:bg-gray-900
       dark:text-white duration-200 relative z-40"
    >
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-1 sm:py-0">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
            >
              <img className="w-10" src={Logo} alt="Shopers Logo" />
              Shopers
            </a>
          </div>

          {/* Search, Cart, and Dark Mode Section */}

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div>
              <form className="relative group sm:block" role="search">
                <input
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  className="w-[150px] sm:w-[100px] group-hover:w-[200px] 
                transition-all duration-300 rounded-full border 
                border-gray-300 px-2 py-1 focus:outline-none 
                focus:border-primary m-2"
                />
                <FaSearch
                  className="text-gray-500 group-hover:text-primary absolute 
                top-1/2 -translate-y-1/2 right-3"
                />
              </form>
            </div>
            <div>
              {/* Order Button */}
              <button
                onClick={() => alert("This feature is currently not available")}
                aria-label="Order"
                className="bg-gradient-to-r from-primary to-secondary 
              transition-all duration-200 text-white px-4 py-1 h-8 
              m-2 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <IoIosCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4
                hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Drop down */}
          <li
            className="group relative
          cursor-pointer"
          >
            <a
              href="#"
              className="flex items-center gap=[2px] py-2
            hover:text-primary duration-200"
            >
              Trending
              <span>
                <PiCaretDownFill
                  className="transition-all
                 duration-200 
                 group-hover:rotate-180"
                />
              </span>
            </a>
            <div
              className="absolute z-[9999] hidden group-hover:block w-[200px] 
            rounded-md bg-yellow p-2 text-black"
            >
              <ul>
                <li>
                  {DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full
                      rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
