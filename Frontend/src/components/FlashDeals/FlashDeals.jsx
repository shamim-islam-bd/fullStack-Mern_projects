import React from "react";
import FlashCard from "./FlashCard";
import "./FlashDeals.css";

export const FlashDeals = () => {
  return (
    <div>
      <section className="flash">
        <div className="container">
          <div className="heading flex items-center">
            <i style={{ color: "red" }} className="fa fa-bolt"></i>
            <h2 className="px-2 font-bold">Flash Delas</h2>
          </div>
          <FlashCard />
        </div>
      </section>
    </div>
  );
};
