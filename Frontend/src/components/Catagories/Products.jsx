import React, { useState } from "react";
import Sdata from "./Sdata";

export const Products = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-rows-3">
        {Sdata.map((Sdata) => {
          return (
            <div className="shadow-md">
              <div className="rounded-sm p-3 m-5">
                <div className="relative">
                  <span className="discount">{Sdata.discount}%Off</span>
                  <div className="block text-end">
                    <span className="bg-[#0f3460] text-white py-1 px-2 rounded-full">
                      {count}
                    </span>
                  </div>
                </div>
                <li
                  onClick={increment}
                  className="block cursor-pointer text-end pt-2 pr-[2px] text-xl"
                >
                  <i className="text-primary fas fas-regular fa-heart"></i>
                </li>
                <img
                  className="w-full object-cover md:w-48"
                  src={Sdata.cover}
                  alt=""
                  srcset=""
                />
                <div className="py-3">
                  <h3>{Sdata.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary">${Sdata.price}.00</span>
                    <button className="Plus_button">
                      <i className="fa fa-plus text-primary hover:text-white"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
