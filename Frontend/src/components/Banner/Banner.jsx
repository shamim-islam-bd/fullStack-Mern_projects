import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Banner";
import Sdata from "./Sdata";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  console.log("hittig", Sdata.cover);

  return (
    <div>
      <section className="homeSlide contentWidth">
        <div className="container">
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <>
                  <div
                    className="box flex items-center justify-between top"
                    key={index}
                  >
                    <div className="left">
                      <h1 className="lg:text-2xl md:text-2xl">{value.title}</h1>
                      <p className="sm:text-[14px] py-3">{value.desc}</p>
                      <button className="btn-primary my-3 px-4 py-2 border-[1px] border-primary rounded-full">
                        Visit Collections
                      </button>
                    </div>
                    <div className="right">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </div>
  );
};
