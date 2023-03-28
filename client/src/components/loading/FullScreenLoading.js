import React from "react";

const FullScreenLoading = () => {
  return (
    <section className="fixed top-0 left-0 h-screen w-screen overflow-hidden flex justify-center items-center bg-white">
      <img
        src="/loading.gif"
        alt="loading"
        loading="lazy"
        className="max-w-full"
      />
    </section>
  );
};

export default FullScreenLoading;
