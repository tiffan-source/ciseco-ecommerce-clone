import React from "react";
import ProductCard from "./ProductCard";

const TrendingNow = ({ products, loading }) => {
  return (
    <>
      <section>
        <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 text-neutral-900">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold">
              What's trending now
            </h2>
            <span className="mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500">
              Discover the most trending products in Ciseco.
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
          {products?.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TrendingNow;
