import React, { useState } from "react";
import { Link } from "react-router-dom";
import bed2 from "../../assets/images/icons/bed-2.svg";
import bed from "../../assets/images/icons/bed.svg";
import office from "../../assets/images/icons/office.svg";
import restaurant from "../../assets/images/icons/restaurant.svg";
import sofa from "../../assets/images/icons/sofa.svg";
import terrace from "../../assets/images/icons/terrace.svg";

export const Navbar = () => {
  const [hide, setHide] = useState(true);
  const [open, setOpen] = useState(false);

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
                  className="text-gray-200 hover:text-white transition flex items-center"
                >
                  Home
                  <i class="ml-[5px] fas fa-light fa-angle-down"></i>
                </a>
                <a
                  href="shop.html"
                  className="text-gray-200 hover:text-white transition"
                >
                  Shop
                  <i class="ml-[5px] fas fa-light fa-angle-down"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  About us
                  <i class="ml-[5px] fas fa-light fa-angle-down"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-200 hover:text-white transition"
                >
                  Contact us
                  <i class="ml-[5px] fas fa-light fa-angle-down"></i>
                </a>
              </div>
              <Link
                to="/register"
                href="#"
                className="ml-auto justify-self-end text-gray-200 hover:text-white transition"
              >
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- mobile menubar --> */}
      <div className="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <a
          onClick={() => {
            setHide(!hide);
          }}
          className="block cursor-pointer text-center text-gray-700 hover:text-primary transition relative"
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
      {!hide && (
        <section class="fixed inset-y-0 right-0 z-50 flex">
          <div class="w-screen max-w-sm">
            <div class="flex flex-col h-full divide-y divide-gray-200 bg-gray-50">
              <div class="overflow-y-scroll">
                <header class="flex items-center justify-between h-16 pl-6">
                  <span class="text-sm font-medium tracking-widest uppercase">
                    Menu
                  </span>

                  <button
                    onClick={() => {
                      setHide(!open);
                    }}
                    aria-label="Close menu"
                    class="w-16 h-16 border-l border-gray-200"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </header>

                <nav class="flex flex-col text-sm font-medium text-gray-500 border-t border-b border-gray-200 divide-y divide-gray-200">
                  <a href="" class="px-6 py-3">
                    {" "}
                    Home{" "}
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    About{" "}
                  </a>
                  <a
                    href=""
                    class="flex items-center justify-between px-6 py-3"
                  >
                    Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a
                    href=""
                    class="flex items-center justify-between px-6 py-3"
                  >
                    Collections
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    Services{" "}
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    History{" "}
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    Contact{" "}
                  </a>
                  <a
                    href=""
                    class="flex items-center justify-between px-6 py-3"
                  >
                    Support
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                  <a href="" class="flex items-center px-6 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Account
                  </a>
                  <a href="" class="flex items-center px-6 py-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    Careers
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    FAQs{" "}
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a href="" class="px-6 py-3">
                    {" "}
                    Terms Conditions{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <!-- mobile sidebar menu end --> */}
    </div>
  );
};
