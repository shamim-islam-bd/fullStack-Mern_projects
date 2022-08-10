import React from "react";
import "./Header.css";

const data = [
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Fashion",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Electronic",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Cars",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Home & Garden",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Gifts",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Music",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Health & Beauty",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Pets",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Baby Toys",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Groceries",
  },
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Books",
  },
];

export const HeaderCatagories = () => {
  return (
    <div className="category">
      {data.map((value, idx) => {
        return (
          <div className="box flex items-center" key={idx}>
            <img className="w-14 p-2" src={value.cateImg} alt="" />
            <span className="p-2">{value.cateName}</span>
          </div>
        );
      })}
    </div>
  );
};
