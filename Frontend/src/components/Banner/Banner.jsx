import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Banner.css";
import Sdata from "./Sdata";

// Next Arrow
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         fontSize: "40px",
//         borderRadius: "50%",
//         marginRight: "-30px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// Preview Arrow
// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "red",
//         fontSize: "40px",
//         borderRadius: "50%",
//         marginLeft: "-30px",
//       }}
//       onClick={onClick}
//     />
//   );
// }

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>;
    },
  };

  return (
    <div>
      <section className="homeSlide contentWidth container">
        <div className="">
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <>
                  <div
                    className="box lg:flex md:flex items-center lg:justify-between md:justify-between top"
                    key={index}
                  >
                    <div className="left">
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className="btn-primary">Visit Collections</button>
                    </div>
                    <div className="right">
                      <img
                        className="w-full pt-6 object-cover md:h-full md:w-full"
                        src={value.cover}
                        alt=""
                      />
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
