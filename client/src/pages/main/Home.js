import React from "react";
import Banner from "../../components/home/Banner";
import BuyingSteps from "../../components/home/BuyingSteps";
import NewArrivals from "../../components/home/NewArrivals";
import { useDisplayProductsQuery } from "../../features/product/productApi";
import KidsProduct from "../../components/home/KidsProduct";
import ExpertChoice from "../../components/home/ExpertChoice";

const Home = () => {
  const { data: productData, isLoading } = useDisplayProductsQuery({
    page: 0,
    limit: 0,
  });

  const products = productData?.data || [];

  return (
    <section className="container mx-auto flex flex-col gap-y-32 px-4">
      <Banner />
      <div className="lg:px-32 flex flex-col gap-y-32">
        <BuyingSteps />
        <NewArrivals
          products={products.slice(-4)}
          loading={isLoading}
          type={"carousel"}
        />
        <KidsProduct />
        <ExpertChoice
          products={products.slice(0, 4)}
          loading={isLoading}
          type={"slide"}
        />
      </div>
    </section>
  );
};

export default Home;
