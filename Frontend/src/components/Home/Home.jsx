import React from "react";
import { Footer } from "../../common/Footer/Footer";
import { HeaderMain } from "../../common/Header/HeaderMain";
import { Banner } from "../Banner/Banner";
import { Catagories } from "../Catagories/Catagories";
import { Feathers } from "../Feathers/Feathers";
import { FlashDeals } from "../FlashDeals/FlashDeals";
import { FlashSale } from "../FlashSale/FlashSale";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <HeaderMain />
      <Banner />
      <Feathers />
      <FlashDeals />
      <Catagories />
      <FlashSale />
      <Footer />
    </>
  );
};
