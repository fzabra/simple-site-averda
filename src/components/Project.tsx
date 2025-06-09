import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
];

const animation = {
  duration: 20000,
  easing: (t: number) => t,
};

const Project: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    (slider) => {
      let isMobile = window.innerWidth < 1024;
      if (!isMobile) {
        slider.on("created", () => {
          slider.moveToIdx(1, true, animation);
        });
        slider.on("updated", () => {
          slider.moveToIdx(slider.track.details.abs + 1, true, animation);
        });
        slider.on("animationEnded", () => {
          slider.moveToIdx(slider.track.details.abs + 1, true, animation);
        });
      }
    },
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 1,
        spacing: 10,
      },
      breakpoints: {
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
    }
  );

  return (
    <section className="w3-row-padding w3-padding-64 w3-theme-l1" id="work">
      <div className="w3-row-padding w3-center">
        <h2>O PROJETO</h2>
        <p>
          COM EXISTÊNCIA DESDE 2008 O PROJETO TEM COMO <br />
          OBJETIVO PRINCIPAL FOMENTAR A PRATICA ESPORTIVA E <br />
          ESCOLAR PARA CRIANÇAS E JOVENS , AJUDANDO OS <br />
          PARTICIPANTES NO DESENVOLVIMENTO DA COORDENAÇÃO <br />
          MOTORA E TIRA-LOS DAS GRANDES OCIOSIDADES DAS RUAS <br />
          ATRAVÉS DO SKATE.
        </p>

        <div ref={sliderRef} className="keen-slider mt-6">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
