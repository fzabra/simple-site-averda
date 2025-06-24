import React from "react";

interface HeaderProps {
  onNavigate: (page: "home" | "transparencia") => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const openNav = () => {
    const x = document.getElementById("navDemo");
    if (x) {
      x.className =
        x.className.indexOf("w3-show") === -1
          ? x.className + " w3-show"
          : x.className.replace(" w3-show", "");
    }
  };

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align">
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2 icon-nav"
            href="javascript:void(0);"
            onClick={openNav}
          ></a>
          <a href="#" className="w3-bar-item w3-button w3-teal" onClick={() => onNavigate("home")}>AVERA</a>
          <a href="#team" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Nossa Equipe</a>
          <a href="#work" className="w3-bar-item w3-button w3-hide-small w3-hover-white">O Projeto</a>
          <a href="#network" className="w3-bar-item w3-button w3-hide-small w3-hover-white">Siga-nos</a>
          <a className="w3-bar-item w3-button w3-hide-small w3-hover-white" onClick={() => onNavigate("transparencia")}>Transparência</a>
        </div>
      </div>

      <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium">
        <a href="#team" className="w3-bar-item w3-button">Nossa Equipe</a>
        <a href="#work" className="w3-bar-item w3-button">O Projeto</a>
        <a href="#network" className="w3-bar-item w3-button">Siga-nos</a>
        <a className="w3-bar-item w3-button" onClick={() => onNavigate("transparencia")}>Transparência</a>
      </div>
    </>
  );
};

export default Header;
