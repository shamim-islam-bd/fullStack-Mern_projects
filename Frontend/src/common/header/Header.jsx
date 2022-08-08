import React from "react";
import bed2 from "../../assets/images/icons/bed-2.svg";
import bed from "../../assets/images/icons/bed.svg";
import logo from "../../assets/images/icons/logo.svg";
import office from "../../assets/images/icons/office.svg";
import restaurant from "../../assets/images/icons/restaurant.svg";
import sofa from "../../assets/images/icons/sofa.svg";
import terrace from "../../assets/images/icons/terrace.svg";

export const Header = () => {
  let menuBar = document.querySelector("#menuBar");
  // let mobileMenu = document.querySelector("#mobileMenu");
  // let closeMenu = document.querySelector("#closeMenu");

  // menuBar.addEventListener("click", function () {
  //   console.log("click");
  //   mobileMenu.classList.remove("hidden");
  // });

  // closeMenu.addEventListener("click", function () {
  //   mobileMenu.classList.add("hidden");
  // });

  return (
    <>
      <section className="hidden lg:block md:block w-full m-auto bg-blue-transparent p-5 text-white">
        <div className="flex justify-between items-center container">
          <div className="left row">
            {/* <i className="fa fa-phone"></i> */}
            {/* <label> +88012 3456 7894</label> */}
            <i className="fa fa-envelope"></i>
            <label> support@ui-lib.com</label>
          </div>
          <div className="right row RText">
            <label class="mr-5">Theme FAQ"s</label>
            <label class="mr-5">Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label class="mr-5">EN</label>
            <span>🏳️‍⚧️</span>
            <label class="mr-5">USD</label>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <header className="p-4 shadow-sm bg-white">
        <section className="search p-5">
          <div className="container flex items-center justify-between">
            <div className="logo width w-[20%]">
              <img class="" src={logo} alt="" />
            </div>

            {/* Search */}
            <div className="xl:max-w-xl lg:max-w-lg lg:flex md:flex relative hidden search-box w-[80%] border-2 rounded-full flex items-center justify-between">
              <i className="fa fa-search w-2 text-center text-sm py-3 px-5"></i>
              <input
                class="w-full p-3 focus:outline-none"
                type="text"
                placeholder="Search and hit enter..."
              />
              <button class="w-[30%] text-center p-2 opacity-1 border-l-2 border-l-primary">
                All Category
              </button>
            </div>

            {/* Icons */}
            <div class="space-x-4 flex items-center justify-end w-[20%]">
              <a
                href="#"
                class="block text-center text-gray-700 hover:text-primary transition relative"
              >
                <span class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  5
                </span>
                <div class="text-2xl">
                  <i class="far fa-heart"></i>
                </div>
                <div class="text-xs leading-3">Wish List</div>
              </a>
              <a
                href="#"
                class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
              >
                <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  3
                </span>
                <div class="text-2xl">
                  <i class="fas fa-shopping-bag"></i>
                </div>
                <div class="text-xs leading-3">Cart</div>
              </a>
              <a
                href="#"
                class="block text-center text-gray-700 hover:text-primary transition"
              >
                <div class="text-2xl">
                  <i class="far fa-user"></i>
                </div>
                <div class="text-xs leading-3">Account</div>
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* navbar */}

      <nav class="bg-blue-transparent hidden lg:block">
        <div class="container">
          <div class="flex">
            <div class="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
              <span class="text-white">
                <i class="fas fa-bars"></i>
              </span>
              <span class="capitalize ml-2 text-white">All categories</span>

              <div class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={bed} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                </a>

                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={sofa} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>

                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={office} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Office</span>
                </a>

                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={terrace} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                </a>

                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={bed2} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                </a>
                <a
                  href="#"
                  class="px-6 py-3 flex items-center hover:bg-gray-100 transition"
                >
                  <img src={restaurant} class="w-5 h-5 object-contain" />
                  <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                </a>
              </div>
            </div>

            <div class="flex items-center justify-between flex-grow pl-12">
              <div class="flex items-center space-x-6 text-base capitalize">
                <a
                  href="index.html"
                  class="text-gray-200 hover:text-white transition"
                >
                  Home
                  <i class="fas fa-chevron-down"></i>
                </a>
                <a
                  href="shop.html"
                  class="text-gray-200 hover:text-white transition"
                >
                  Shop
                  <i class="fas fa-chevron-down"></i>
                </a>
                <a href="#" class="text-gray-200 hover:text-white transition">
                  About us
                  <i class="fas fa-chevron-down"></i>
                </a>
                <a href="#" class="text-gray-200 hover:text-white transition">
                  Contact us
                  <i class="fas fa-chevron-down"></i>
                </a>
              </div>
              <a
                href="#"
                class="ml-auto justify-self-end text-gray-200 hover:text-white transition"
              >
                Login/Register
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- mobile menubar --> */}
      <div class="fixed w-full border-t border-gray-200 shadow-sm bg-white py-3 bottom-0 left-0 flex justify-around items-start px-6 lg:hidden z-40">
        <a
          href="#"
          class="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl" id="menuBar">
            <i class="fas fa-bars"></i>
          </div>
          <div class="text-xs leading-3">Menu</div>
        </a>
        <a
          href="#"
          class="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <i class="fas fa-list-ul"></i>
          </div>
          <div class="text-xs leading-3">Category</div>
        </a>
        <a
          href="#"
          class="block text-center text-gray-700 hover:text-primary transition relative"
        >
          <div class="text-2xl">
            <i class="fas fa-search"></i>
          </div>
          <div class="text-xs leading-3">Search</div>
        </a>
        <a
          href="cart.html"
          class="text-center text-gray-700 hover:text-primary transition relative"
        >
          <span class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
            3
          </span>
          <div class="text-2xl">
            <i class="fas fa-shopping-bag"></i>
          </div>
          <div class="text-xs leading-3">Cart</div>
        </a>
      </div>
      {/* <!-- mobile menu end --> */}

      {/* <!-- mobile sidebar menu --> */}
      <div
        class="fixed left-0 top-0 w-full h-full z-50 bg-black bg-opacity-30 shadow hidden"
        id="mobileMenu"
      >
        <div class="absolute left-0 top-0 w-72 h-full z-50 bg-white shadow">
          <div
            id="closeMenu"
            class="text-gray-400 hover:text-primary text-lg absolute right-3 top-3 cursor-pointer"
          >
            <i class="fas fa-times"></i>
          </div>
          {/* <!-- navlink --> */}
          <h3 class="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-4 pt-4">
            Menu
          </h3>
          <div class="">
            <a
              href="index.html"
              class="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="shop.html"
              class="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              class="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              About Us
            </a>
            <a
              href="#"
              class="block px-4 py-2 font-medium transition hover:bg-gray-100"
            >
              Contact Us
            </a>
          </div>
          {/* <!-- navlinks end --> */}
        </div>
      </div>
      {/* <!-- mobile sidebar menu end --> */}
    </>
  );
};
