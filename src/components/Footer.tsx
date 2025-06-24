import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-screen overflow-hidden footer-site text-center py-6 bg-gray-100 fix-footer">
      <img
        src="/images/logo.png"
        className="w3-image w3-greyscale-min mx-auto mb-2"
        alt="Logo Avera"
      />
      <p className="text-sm text-gray-700">
        Associação Vicentina de Esportes Radicais
      </p>
    </footer>
  );
};

export default Footer;
