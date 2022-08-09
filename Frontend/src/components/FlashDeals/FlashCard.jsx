import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import productItems from "./Fdeals";
import "./FlashDeals.css";

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

const FlashCard = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItem) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">20 % Off</span>
                  <img src={productItem.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <i onClick={increment} className="far fa-heart"></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItem.title} </h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>$20.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    {/* <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button> */}
                    <button>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;
