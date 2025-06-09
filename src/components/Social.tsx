import React from "react";

const Social: React.FC = () => {
  return (
    <div className="w3-row-padding w3-padding-64 w3-theme-l1" id="network">
      <div className="w3-row-padding w3-center">
        <h2>SIGA NOSSAS REDES</h2>
        <a href="https://www.facebook.com/averaskate/" target="_blank" rel="noopener noreferrer">
          <img src="/images/facebook.svg" alt="Facebook" width={90} height={90} />
        </a>
        <a href="https://www.instagram.com/averaskatesv/" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.svg" alt="Instagram" width={100} height={100} />
        </a>
      </div>
    </div>
  );
};

export default Social;
