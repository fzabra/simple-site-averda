import React from "react";

const Team: React.FC = () => {
  return (
    <div className="w3-container w3-padding-64 w3-center" id="team">
      <h2>NOSSA EQUIPE</h2>
      <div className="w3-row w3-center">
      <br />
      <div className="w3-quarter" style={{ float: "none", display: "inline-block" }}>
        <img
          src="/images/sandromarques.jpg"
          alt="Sandro Marques"
          style={{ width: "45%" }}
          className="w3-circle w3-hover-opacity"
        />
        <h3>Sandro Marques</h3>
        <p>Fundador</p>
      </div>
    </div>
    </div>
  );
};

export default Team;
