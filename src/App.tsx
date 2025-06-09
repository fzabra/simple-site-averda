import type { JSX } from "react";
import Header from "./components/Header";
import FullScreenBanner from "./components/FullScreenBanner";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Project from "./components/Project";
import Social from "./components/Social";
import Footer from "./components/Footer";
import "./assets/css/w3.css";
import "./assets/css/custom.css";

function App(): JSX.Element {
  return (
    <div id="myPage" className="custom">
      <Header />
      <Hero />
      <FullScreenBanner />
      <Team />
      <Project />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
