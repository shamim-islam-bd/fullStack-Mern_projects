import React from "react";
import Home from "../../assets/images/icons/Home.svg";
import "./Cart.css";

export const Cart = () => {
  return (
    <div className="container lg:py-10 pb-40 CartContainer">
      {/* BreadCumbs */}
      <div className="flex items-center py-5">
        <span>
          <img className="w-5" src={Home} alt="" srcset="" />
        </span>
        <span>
          <i class="ml-3 font-md fas fa-light fa-angle-right text-primary"></i>
        </span>
        <span className="ml-3">Shopping Cart</span>
      </div>
      <hr />
      <br />
      <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-5 container">
        <div className="col-span-3 ">
          {/* Card Header */}
          <div className="gap-3">
            <div className="hidden lg:flex col-span-2 justify-between bg-gray-200 p-4">
              <p>Product</p>
              <p>Quantity</p>
              <p>Total Price</p>
            </div>
          </div>

          {/* Card Iteams */}
          <div className="cartMenu grid sm:flex grid-cols-2 mt-5 border">
            <div className="col-span-1 md:p-2 w-[200px]">
              <img
                className=""
                src="https://themes.programmingkit.xyz/rafcart/assets/images/headphone-4.png"
                alt=""
                srcset=""
              />
            </div>
            <div className="col-span-2 md:p-2 w-full p-5 lg:flex lg:items-center lg:justify-between ml-6">
              <div className="">
                <span>Heade phone Extra Bass Headephone.</span>
                <p className="text-primary">$45.00</p>
                <p>Size: M</p>
              </div>
              <div className="flex items-center justify-between py-7">
                <div className="flex">
                  <button className="py-1 px-3 border text-xl">-</button>
                  <span className="py-1 px-3 border">4</span>
                  <button className="py-1 px-3 border text-xl">+</button>
                </div>
                <span className="text-primary lg:mx-6">$45.00</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-7 w-7 mr-6 text-white"
                  fill="red"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 md:col-span-1 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 border p-4">
          <h2 className="text-center pb-5">Order Summary</h2>
          <p className="flex items-center justify-between py-1">
            <strong>Subtotal</strong>
            <strong>$45.00</strong>
          </p>
          <p className="flex items-center justify-between py-1">
            <span>Subtotal</span>
            <span>$45.00</span>
          </p>
          <p className="flex items-center justify-between py-1">
            <strong>Devivery</strong>
            <strong>Free</strong>
          </p>
          <p className="flex items-center justify-between py-1">
            <span>Tax</span>
            <span>Free</span>
          </p>
          <hr />
          <p className="flex items-center justify-between py-1">
            <strong>Total</strong>
            <strong>$45.00</strong>
          </p>
          <div className="flex items-center border mt-5">
            <input
              class="w-[90%] placeholder:italic placeholder:text-slate-400 block bg-whiteborder border-slate-300  py-[10px] pl-9 pr-3 shadow-sm focus:outline-none  focus:border-sky-500 focus:ring-gray-300 focus:ring-1 sm:text-sm"
              placeholder="Coupon here.."
              type="text"
              name="search"
            />
            <p className="w-[30%] p-2 text-white text-center bg-primary">
              Apply
            </p>
          </div>
          <button className="btn-primary rounded-none mt-5 px-5 py-3 text-primary">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
