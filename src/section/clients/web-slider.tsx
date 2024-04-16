import React, { useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Smile from "../../assets/Smile.png";

interface CarouselProps {
  slides: string[];
}

const WebSlider: React.FC<CarouselProps> = ({ slides }) => {
  const [current, setCurrent] = useState<number>(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overflow-hidden relative">
      {/* Text */}
      <div className="flex items-center gap-2 mb-5">
        <h2 className="text-[32px] font-bold text-slate-600 font-['Open Sans']">
          Yuk, Cek Penawaran Terbaik Kami Sebelum Berangkat!
        </h2>
        <img src={Smile} alt="Emoticon Illustration" />
      </div>

      {/* Image Slider */}
      <div className="relative h-[30vh] overflow-hidden">
        <div
          className="flex gap-4 transition ease-out duration-500"
          style={{
            transform: `translateX(-${current * (100 / 3)}%)`,
            width: `${slides.length * (100 / 3)}%`,
          }}
        >
          {slides.map((s, index) => (
            <div key={index} className="w-[100%] h-[20rem]">
              <img
                className="w-[100%] h-[100%] rounded-[30px] object-cover p-4"
                src={s}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="absolute top-0 h-full w-full flex items-center justify-between">
        <button
          className="absolute top-1/2 transform -translate-y-[0%] left-0 text-amber-400 text-6xl"
          onClick={previousSlide}
        >
          <IoIosArrowDropleftCircle />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-[0%] right-0 text-amber-400 text-6xl"
          onClick={nextSlide}
        >
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
};

export default WebSlider;
