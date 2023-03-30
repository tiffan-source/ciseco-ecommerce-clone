import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Searchbar = () => {
  return (
    <>
      <div className="flex flex-col md:gap-y-16 gap-y-8 lg:z-auto z-20 h-full justify-center relative lg:left-[113px]">
        <h1 className="md:text-7xl text-3xl font-bold leading-[115%] lg:text-black text-white lg:drop-shadow-none md:drop-shadow-2xl lg:text-left text-center">
          Start your search <br /> by typing
        </h1>
        <div className="bg-white rounded-full md:p-3 p-2 flex items-center lg:max-w-xl w-4/5 lg:mx-0 mx-auto overflow-hidden shadow-lg">
          <input
            className="flex-auto lg:text-lg md:text-2xl text-sm font-normal py-2 px-3 border-none outline-none focus:ring-0 rounded-full"
            type="text"
            name="search"
            id="search"
            placeholder="Product / Category Name"
            autoComplete="off"
          />
          <button className="p-2 rounded-full bg-[#fea285] hover:bg-[#dd89e3] hover:transition-all hover:duration-300 md:h-14 md:w-14 h-9 w-9 grid md:place-items-center content-center justify-center">
            <MagnifyingGlassIcon className="text-white md:h-8 md:w-8 h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
