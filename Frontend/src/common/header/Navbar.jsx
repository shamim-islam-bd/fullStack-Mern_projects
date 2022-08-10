import React from "react";
import bed2 from "../../assets/images/icons/bed-2.svg";
import bed from "../../assets/images/icons/bed.svg";
import office from "../../assets/images/icons/office.svg";
import restaurant from "../../assets/images/icons/restaurant.svg";
import sofa from "../../assets/images/icons/sofa.svg";
import terrace from "../../assets/images/icons/terrace.svg";

export const Navbar = () => {
  return (
    <div>
      {/* navbar */}
      <nav className="bg-blue-transparent hidden lg:block">
        <div className="container">
          <div className="flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span className="text-white">
                <i className="fas fa-bars"></i>
              </span>
              <span className="capitalize ml-2 text-white">All categories</span>

              <div className="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={bed} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={sofa} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={office} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Office</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={terrace} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>

                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={bed2} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
                <a
                  href="#"
                  className="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={restaurant} className="w-5 h-5 object-contain" />
                  <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12">
              <div className="flex items-center space-x-6 text-base capitalize">
                <a
                  href="index.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Home
                  <i className="fas fa-chevron-down"></i>
                </a>
                <a
                  href="shop.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                  <i className="fas fa-chevron-down"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                  <i className="fas fa-chevron-down"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                  <i className="fas fa-chevron-down"></i>
                </a>
              </div>
              <a
                href="#"
                className="ml-auto justify-self-end text-gray-200 hover:text-white transition"
              >
                Login/Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- mobile menubar --> */}
      <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl" id="menuBar">
            <i className="fas fa-bars"></i>
          </div>
          <div className="text-xs leading-3">Menu</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fas fa-list-ul"></i>
          </div>
          <div className="text-xs leading-3">Category</div>
        </a>
        <a
          href="#"
          className="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div className="text-2xl">
            <i className="fas fa-search"></i>
          </div>
          <div className="text-xs leading-3">Search</div>
        </a>
        <a
          href="cart.html"
          className="text-center text-gray-700 hover:text-primary transition relative"
        >
          <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            3
          </span>
          <div className="text-2xl">
            <i className="fas fa-shopping-bag"></i>
          </div>
          <div className="text-xs leading-3">Cart</div>
        </a>
      </div>
      {/* <!-- mobile menu end --> */}

      {/* <!-- mobile sidebar menu --> */}
      <div
        className="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden"
        id="mobileMenu"
      >
        <div className="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
          <div
            id="closeMenu"
            className="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
          >
            <i className="fas fa-times"></i>
          </div>
          {/* <!-- navlink --> */}
          <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">
            Menu
          </h3>
          <div className="">
            <a
              href="index.html"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="shop.html"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
          {/* <!-- navlinks end --> */}
        </div>
      </div>
    </div>
  );
};
