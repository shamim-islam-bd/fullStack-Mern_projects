import React from "react";

const services = [
  {
    id: 1,
    img: "../../../public/images/icons/delivery-van.svg",
    title: "free shipping",
    price: "Order over $200",
  },
  {
    id: 2,
    img: "../../../public/images/icons/money-back.svg",
    title: "Money returns",
    price: " 30 Days money return",
  },
  {
    id: 3,
    img: "../../../public/images/icons/service-hours.svg",
    title: "24/7 Support",
    price: "Customer support",
  },
];

export const Feathers = () => {
  return (
    <div>
      <div class="container py-16">
        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          {services.map((service) => {
            return (
              <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img
                  src={service.img}
                  class="lg:w-12 w-10 h-12 object-contain"
                />
                <div>
                  <h4 class="font-medium capitalize text-lg">
                    {service.title}
                  </h4>
                  <p class="text-gray-500 text-xs lg:text-sm">
                    {service.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
