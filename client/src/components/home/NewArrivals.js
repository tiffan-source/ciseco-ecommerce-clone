import React from "react";
import GrayText from "./GrayText";

const NewArrivals = () => {
  return (
    <>
      <div className="flex flex-col gap-y-8">
        <h2 class=" text-3xl md:text-4xl font-semibold">
          New Arrivals<span class="">. </span>
          <GrayText>New Sports equipment</GrayText>
        </h2>
        <div></div>
      </div>
    </>
  );
};

export default NewArrivals;
