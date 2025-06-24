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

const Project: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: true, // ativar o drag
    slides: {
      perView: 1.2,
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <section className="w3-row-padding w3-padding-64 w3-theme-l1" id="work">
      <div className="w3-row-padding w3-center">
        <h2>O PROJETO</h2>
        <p>
          COM EXISTÊNCIA DESDE 2008 O PROJETO TEM COMO <br />
          OBJETIVO PRINCIPAL FOMENTAR A PRÁTICA ESPORTIVA E <br />
          ESCOLAR PARA CRIANÇAS E JOVENS, AJUDANDO OS <br />
          PARTICIPANTES NO DESENVOLVIMENTO DA COORDENAÇÃO <br />
          MOTORA E TIRANDO-OS DA OCIOSIDADE DAS RUAS <br />
          ATRAVÉS DO SKATE.
        </p>

        <div ref={sliderRef} className="keen-slider mt-6">
          {images.map((src, i) => (
            <div key={i} className="keen-slider__slide flex justify-center">
              <img
                src={src}
                alt={`slide-${i + 1}`}
                className="w-48 h-32 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
