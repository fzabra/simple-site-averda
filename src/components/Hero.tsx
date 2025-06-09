import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute bottom-12 w-full text-center box-button">
        <button
          onClick={() => window.location.href = 'https://wa.me/5513974134220'}
          className="w3-button w3-xlarge w3-theme w3-hover-teal"
          title="Aulas de Skate"
        >
          AULAS DE SKATE
        </button>
      </div>
    </section>
  );
};

export default Hero;
