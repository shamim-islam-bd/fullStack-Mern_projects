import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import swal from "sweetalert";
// import productItems from "./Fdeals";
import "./FlashDeals.css";

import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/actions/productActions";

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
  const dispatch = useDispatch();
  const product = useSelector((state) => state);
  console.log(product);

  useEffect(() => {
    if (error) {
      return swal(error.message);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    // centerMode: true, // important for responsive
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 2024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {product.map((productItem) => {
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
                    <button className="Plus_button">
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
