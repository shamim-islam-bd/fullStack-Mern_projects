import React, { useState } from "react";
import logo from "../../assets/images/icons/logo.svg";
import { HeaderCatagories } from "./HeaderCatagories";

export const Header = () => {
  const [hide, setHide] = useState(true);

  const handleCtgs = () => {
    setHide(!hide);
  };

  // let menuBar = document.querySelector("#menuBar");
  // let mobileMenu = document.querySelector("#mobileMenu");
  // let closeMenu = document.querySelector("#closeMenu");

  // menuBar.addEventListener("click", function () {
  //   console.log("click");
  //   mobileMenu.classNameList.remove("hidden");
  // });

  // closeMenu.addEventListener("click", function () {
  //   mobileMenu.classNameList.add("hidden");
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
            <label className="mr-5">Theme FAQ"s</label>
            <label className="mr-5">Need Help?</label>
            <span>🏳️‍⚧️</span>
            <label className="mr-5">EN</label>
            <span>🏳️‍⚧️</span>
            <label className="mr-5">USD</label>
          </div>
        </div>
      </section>

      {/* Main Header */}
      <header className="p-4 shadow-sm bg-white">
        <section className="search p-5">
          <div className="container flex items-center justify-between">
            <div className="logo width w-[20%]">
              <img className="" src={logo} alt="" />
            </div>

            {/* Search */}
            <div className="headerSearch xl:max-w-xl lg:max-w-lg lg:flex md:flex relative hidden search-box w-[80%] border-2 rounded-full items-center justify-between">
              <i className="fa fa-search w-2 text-center text-sm py-3 px-5"></i>
              <input
                className="w-full p-3 focus:outline-none"
                type="text"
                placeholder="Search and hit enter..."
              />
              <button
                onClick={handleCtgs}
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="hidden lg:block xl:block active:bg-gray-100 focus:outline-none focus:ring-gray-400 w-[30%] rounded-r-xl text-center p-3 opacity-1 border-l-2 border-l-primary"
              >
                Category
              </button>
              {/* Header Catagories */}
              {!hide && <HeaderCatagories></HeaderCatagories>}
            </div>

            {/* Icons */}
            <div className="space-x-4 flex items-center justify-end w-[20%]">
              <a
                href="#"
                className="block text-center text-gray-700 hover:text-primary transition relative"
              >
                <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  5
                </span>
                <div className="text-2xl">
                  <i className="far fa-heart"></i>
                </div>
                <div className="text-xs leading-3">Wish List</div>
              </a>
              <a
                href="#"
                className="lg:block text-center text-gray-700 hover:text-primary transition hidden relative"
              >
                <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  3
                </span>
                <div className="text-2xl">
                  <i className="fas fa-shopping-bag"></i>
                </div>
                <div className="text-xs leading-3">Cart</div>
              </a>
              <a
                href="#"
                className="block text-center text-gray-700 hover:text-primary transition"
              >
                <div className="text-2xl">
                  <i className="far fa-user"></i>
                </div>
                <div className="text-xs leading-3">Account</div>
              </a>
            </div>
          </div>
        </section>
      </header>

      {/* <!-- mobile sidebar menu end --> */}
    </>
  );
};
