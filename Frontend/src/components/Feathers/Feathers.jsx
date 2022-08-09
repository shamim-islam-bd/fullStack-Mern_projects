import React from "react";
import delivery from "../../assets/images/icons/delivery-van.svg";
import monyBack from "../../assets/images/icons/money-back.svg";
import service from "../../assets/images/icons/service-hours.svg";

export const Feathers = () => {
  return (
    <div>
      {/* <div className="flex flex-row">
     <div class="basis-2/4">
        <i></i>
     </div>
     <div class="basis-2/4">02</div>
     <div class="basis-2/4">03</div>
    </div> */}

      <div class="container py-16">
        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src={delivery} class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">free shipping</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Order over $200</p>
            </div>
          </div>

          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src={monyBack} class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">Money returns</h4>
              <p class="text-gray-500 text-xs lg:text-sm">
                30 Days money return
              </p>
            </div>
          </div>

          <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
            <img src={service} class="lg:w-12 w-10 h-12 object-contain" />
            <div>
              <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
              <p class="text-gray-500 text-xs lg:text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
