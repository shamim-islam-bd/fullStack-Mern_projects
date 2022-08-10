import React from "react";

export const FlashSale = () => {
  return (
    <div className="flex items-center justify-between container py-5">
      <div className="p-4 bg-red-200 m-3">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class=" border-gray-400 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class=" text-primary text-bold">30% Discount</p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Free Shpping
              </div>
              <p class="text-gray-700 text-base">
                Consectetur adipisicing elit Voluptatibus quia.
              </p>
            </div>
            <div class="flex items-center">
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
          <div
            class="m-3 bg-[url('https://themes.programmingkit.xyz/rafcart/assets/images/sofa-1.png')] h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
          ></div>
        </div>
      </div>
      <div className="p-4 bg-slate-200 m-3">
        <div class="max-w-sm w-full lg:max-w-full lg:flex">
          <div class=" border-gray-400 lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
              <p class=" text-primary text-bold">30% Discount</p>
              <div class="text-gray-900 font-bold text-xl mb-2">
                Free Shpping
              </div>
              <p class="text-gray-700 text-base">
                Consectetur adipisicing elit Voluptatibus quia.
              </p>
            </div>
            <div class="flex items-center">
              <button className="btn-primary">Shop Now</button>
            </div>
          </div>
          <div
            class="m-3 bg-[url('https://themes.programmingkit.xyz/rafcart/assets/images/sofa-1.png')] h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            title="Woman holding a mug"
          ></div>
        </div>
      </div>
    </div>
  );
};
