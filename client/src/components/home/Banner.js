import React from "react";
import Searchbar from "./Searchbar";

const Banner = () => {
  return (
    <>
      <section className="lg:px-0">
        <section className="h-[67vh] overflow-hidden bg-[#f8f0ea] rounded-2xl">
          <div
            className="bg-center bg-no-repeat h-full relative"
            style={{ backgroundImage: "url(/assets/banner/banner-bg.svg)" }}
          >
            <Searchbar />
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
