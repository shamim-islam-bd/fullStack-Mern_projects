import React from "react";
import { Header } from "../../common/Header/Header";
import { Banner } from "../Banner/Banner";
import { Catagories } from "../Catagories/Catagories";
import { Feathers } from "../Feathers/Feathers";
import { FlashDeals } from "../FlashDeals/FlashDeals";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Feathers />
      <FlashDeals />
      <Catagories />
    </>
  );
};
