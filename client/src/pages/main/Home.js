import React from "react";
import Banner from "../../components/home/Banner";
import BuyingSteps from "../../components/home/BuyingSteps";

const Home = () => {
  return (
    <section className="container mx-auto flex flex-col gap-y-32 px-4">
      <Banner />
      <BuyingSteps />
    </section>
  );
};

export default Home;
