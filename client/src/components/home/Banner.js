import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <>
      <section className="container mx-auto lg:px-0 px-4">
        <section className="h-[65vh] overflow-hidden bg-[#f8f0ea] rounded-2xl">
          <div
            className="bg-center bg-no-repeat h-full relative"
            style={{ backgroundImage: "url(/assets/banner/banner-bg.svg)" }}
          >
            <div className="flex flex-col md:gap-y-16 gap-y-8 absolute md:top-1/4 top-[30%] left-[10%] lg:z-auto z-20">
              <h1 className="md:text-7xl text-3xl font-bold leading-[115%] lg:text-black text-white lg:drop-shadow-none md:drop-shadow-2xl lg:text-left text-center">
                Start your search <br /> by typing
              </h1>
              <div className="bg-white rounded-full md:p-3 p-2 flex w-full items-center md:max-w-xl overflow-hidden shadow-lg">
                <input
                  className="flex-auto lg:text-lg md:text-2xl text-sm font-normal p-2 border-none outline-none focus:ring-0 rounded-full pl-4"
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Product or Category Name"
                />
                <button className="p-2 rounded-full bg-[#fea285] hover:bg-[#dd89e3] hover:transition-all hover:duration-300 md:h-14 md:w-14 h-9 w-9 grid md:place-items-center content-center justify-center">
                  <MagnifyingGlassIcon className="text-white md:h-8 md:w-8 h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-black/30 z-10 lg:hidden" />
            <img
              src="/assets/banner/banner-model.png"
              alt="banner model"
              loading="lazy"
              className="max-w-full absolute bottom-0 right-0 lg:w-[40%]"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Banner;
