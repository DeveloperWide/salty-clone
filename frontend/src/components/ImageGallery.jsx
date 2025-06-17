import { useEffect, useState } from "react";
import WomanCarousel1 from "../assets/carousel/Woman-Carousal-1.webp";
import WomanCarousel2 from "../assets/carousel/Woman-Carousal-2.webp";
import WomanCarousel4 from "../assets/carousel/Woman-Carousal-4.webp";
import WomanCarousel5 from "../assets/carousel/Woman-Carousal-5.jpg";

const images = [
  WomanCarousel1,
  WomanCarousel2,
  WomanCarousel4,
  WomanCarousel5,
];

const ImageGallery = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="relative h-96 md:h-126 overflow-hidden">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`absolute w-full h-full object-cover top-0 left-0 transition-opacity duration-700 ease-in-out ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          />
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
