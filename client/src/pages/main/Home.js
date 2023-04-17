import React from "react";
import Banner from "../../components/home/Banner";
import BuyingSteps from "../../components/home/BuyingSteps";
import NewArrivals from "../../components/home/NewArrivals";

const Home = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-32 px-4">
      <Banner />
      <div className="px-32 flex flex-col gap-y-32">
        <BuyingSteps />
        <NewArrivals />
      </div>
    </section>
  );
};

export default Home;
