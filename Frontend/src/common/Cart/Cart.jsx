import React from "react";
import Home from "../../assets/images/icons/Home.svg";

export const Cart = () => {
  return (
    <div>
      <div className="flex items-center container py-5">
        <span>
          <img className="w-5 ml-3" src={Home} alt="" srcset="" />
        </span>
        <span>
          <i class="ml-3 font-md fas fa-light fa-angle-right text-primary"></i>
        </span>
        <span className="ml-3">Shopping Cart</span>
      </div>
    </div>
  );
};
