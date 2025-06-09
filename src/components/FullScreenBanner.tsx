import React from "react";

const FullScreenBanner: React.FC = () => {
  return (
    <section className="w-screen h-screen overflow-hidden">
      <img
        src="/images/background2.png"
        alt="Banner"
        className="w-full h-full object-cover block fiximg"
      />
    </section>
  );
};

export default FullScreenBanner;
