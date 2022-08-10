import React from "react";
import "./Header.css";

const data = [
  {
    cateImg: "../../../public/images/category/cat1.png",
    cateName: "Fashion",
  },
  {
    cateImg: "../../../public/images/category/cat2.png",
    cateName: "Electronic",
  },
  {
    cateImg: "../../../public/images/category/cat3.png",
    cateName: "Cars",
  },
  {
    cateImg: "../../../public/images/category/cat4.png",
    cateName: "Garden",
  },
  {
    cateImg: "../../../public/images/category/cat5.png",
    cateName: "Electronic",
  },
  {
    cateImg: "../../../public/images/category/cat6.png",
    cateName: "Cars",
  },
  {
    cateImg: "../../../public/images/category/cat7.png",
    cateName: "Garden",
  },
  ,
  {
    cateImg: "../../../public/images/category/cat3.png",
    cateName: "Cars",
  },
  {
    cateImg: "../../../public/images/category/cat4.png",
    cateName: "Garden",
  },
  {
    cateImg: "../../../public/images/category/cat5.png",
    cateName: "Electronic",
  },
];

export const HeaderCatagories = () => {
  return (
    <>
      <div className="HeaderCategory w-48">
        {data.map((value, idx) => {
          return (
            <div className="Ctgbox w-20" key={idx}>
              <div className="m-1 p-1 flex items-center ">
                <img className="w-12 mr-2" src={value.cateImg} alt="" />
                <span className="">{value.cateName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
