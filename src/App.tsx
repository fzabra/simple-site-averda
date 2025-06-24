import type { JSX } from "react";
import { useState } from "react";
import Header from "./components/Header";
import FullScreenBanner from "./components/FullScreenBanner";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Project from "./components/Project";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Transparencia from "./components/Transparencia";
import "./assets/css/w3.css";
import "./assets/css/custom.css";

function App(): JSX.Element {
  const [page, setPage] = useState<"home" | "transparencia">("home");

  const isTransparencia = page === "transparencia";

  return (
    <div
      id="myPage"
      className={`custom ${isTransparencia ? "transparencia-layout" : ""}`}
    >
      <Header onNavigate={setPage} />
      <Hero />
      <FullScreenBanner />
      {isTransparencia ? <Transparencia /> : (
        <>
          <Team />
          <Project />
        </>
      )}
      <Social />
      <Footer />
    </div>
  );
}

export default App;
