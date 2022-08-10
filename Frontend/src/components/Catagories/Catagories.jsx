import React from "react";
import "./Catagories.css";
import { Products } from "./Products";

const data = [
  {
    cateImg: "../../../public/images/category/cat-1.png",
    cateName: "Apple",
  },
  {
    cateImg: "../../../public/images/category/cat-2.png",
    cateName: "Samasung",
  },
  {
    cateImg: "../../../public/images/category/cat-1.png",
    cateName: "Oppo",
  },
  {
    cateImg: "../../../public/images/category/cat-2.png",
    cateName: "Vivo",
  },
  {
    cateImg: "../../../public/images/category/cat-1.png",
    cateName: "Redimi",
  },
  {
    cateImg: "../../../public/images/category/cat-2.png",
    cateName: "Sony",
  },
];

export const Catagories = () => {
  return (
    <div>
      <section className="container">
        <div className="flex lg:flex-row sm:flex-col">
          <div className="hidden lg:block md:block brands basis-1/4 shadow-lg p-3">
            <div className="flex justify-around py-3">
              <a href="#">
                <h1>Brands</h1>
              </a>
              <span className="text-bold">|</span>
              <a href="#">
                <h1>Shop</h1>
              </a>
            </div>
            {data.map((value, index) => {
              return (
                <a href="#">
                  <div
                    className="rounded-[5px] flex mb-4 hover:shadow-sm p-2 my-3 bg-slate-50"
                    key={index}
                  >
                    <img className="p-2" src={value.cateImg} alt="" />
                    <span className="p-2">{value.cateName}</span>
                  </div>
                </a>
              );
            })}
            <div className="box box2 text-center py-3 rounded-lg hover:shadow-md">
              <button>View All Brands</button>
            </div>
          </div>
          <div className="p-6 Products items-center basis-3/4">
            <div className="title flex justify-between items-center">
              <h2>Mobile Phone</h2>
              <a className="flex items-center" href="#">
                <h4 className="pr-2 ">View All</h4>
                <i class="text-2xl fa fas-solid fa-caret-right text-primary"></i>
              </a>
            </div>
            {/* Products Route */}
            <Products></Products>
          </div>
        </div>
      </section>
    </div>
  );
};
