import React, { useState, useEffect } from "react";
import ButtonSlide from "./element/button/buttonSlide";
import { useNavigate } from "react-router-dom";

const slides = [
  { id: "slide1", src: "/image/caraousel1.png", align: "right" },
  { id: "slide2", src: "/image/caraousel2.png", align: "left" },
  { id: "slide3", src: "/image/gabung.png", align: "center" },
];

export default function CaraouseComponent() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };
  const handleCLick = () => {
    navigate("/donasiku");
    // window.scrollTo('#donasi', { behavior: 'smooth' });
  };
  const handleCLickGabung = () => {
    navigate("/formulir-mitra");
    // window.scrollTo('#donasi', { behavior: 'smooth' });
  };

  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={slide.id}
          className={`carousel-item relative w-full ${
            index === currentSlide ? "block" : "hidden"
          }`}
        >
          <img
            src={slide.src}
            className="w-full h-[450px] md:h-[550px]"
          />
          {slide.align !== "center" && (
            <div
              className={`absolute top-0 ${slide.align}-0 w-full md:w-1/2 h-[400px] md:h-[550px] flex flex-col justify-center items-center bg-SemiGreen bg-opacity-60 p-4`}
            >
              <div className="text-DarkGreen text-center md:text-left p-4 mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold uppercase">
                  {slide.align === "right"
                    ? "Donasikan pakaian lebih mudah bersama Go peduli"
                    : "Satu gerakan untuk kebaikan"}
                </h2>
                <button
                  className="text-white bg-Green hover:bg-DarkGreen rounded-3xl px-4 py-2 mt-4 font-bold"
                  onClick={() => handleCLick()}
                >
                  {slide.align === "right"
                    ? "Cepat, tepat, dan terpercaya"
                    : "Bantu mereka sekarang"}
                </button>
              </div>
            </div>
          )}
          {slide.align === "center" && (
              <div
              className={`absolute top-0 ${slide.align}-0 w-full md:w-1/2 h-[400px] md:h-[550px] flex flex-col justify-center items-center bg-SemiGreen bg-opacity-60 p-4`}
            >
              <div className="text-DarkGreen text-center md:text-left p-4 mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold uppercase ml-8 ">Gabung sebagai mitra terpercaya dengan kami </h2>
                <button
                  className="text-white bg-Green hover:bg-DarkGreen rounded-3xl px-4 py-2 mt-4 font-bold ml-8"
                  onClick={() => handleCLickGabung()}
                >
                 Gabung Sekarang
                </button>
              </div>
            </div>
          
          )}
          <div className="absolute flex justify-between items-center left-5 right-5 top-1/2 transform -translate-y-1/2">
            <ButtonSlide
              left={`#${
                slides[(index - 1 + slides.length) % slides.length].id
              }`}
              right={`#${slides[(index + 1) % slides.length].id}`}
              onClickLeft={() =>
                handleSlideChange((index - 1 + slides.length) % slides.length)
              }
              onClickRight={() =>
                handleSlideChange((index + 1) % slides.length)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
