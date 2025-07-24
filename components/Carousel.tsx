"use client";

import React, { useState, useEffect } from "react";

interface CarouselCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface CarouselProps {
  cards: CarouselCard[];
  autoSlideInterval?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  cards,
  autoSlideInterval = 3000,
  pauseOnHover = true,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || cards.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, cards.length, autoSlideInterval]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (cards.length === 0) return null;

  return (
    <div 
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Card Container */}
      <div className="relative w-[1080px] h-[630px] bg-black rounded-xl border border-gray-800 overflow-hidden">
        {/* Card Content */}
        <div className="h-full flex flex-col items-center justify-center p-16 text-center text-white transition-all duration-500 ease-in-out">
          {/* Icon/Image at the top */}
          <div className="text-9xl mb-12 transform transition-transform duration-500 ease-in-out">
            {cards[currentIndex].icon}
          </div>
          
          {/* Title */}
          <h3 className="text-4xl font-medium mb-8 transition-opacity duration-500 ease-in-out">
            {cards[currentIndex].title}
          </h3>
          
          {/* Description */}
          <p className="text-xl text-gray-300 font-light leading-relaxed transition-opacity duration-500 ease-in-out max-w-2xl">
            {cards[currentIndex].description}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-gray-500 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-800">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-linear"
            style={{
              width: `${((currentIndex + 1) / cards.length) * 100}%`,
              animation: isPaused ? 'none' : `progress ${autoSlideInterval}ms linear infinite`
            }}
          />
        </div>
      </div>

      {/* Navigation Arrows (optional) */}
      <button
        onClick={() => goToSlide((currentIndex - 1 + cards.length) % cards.length)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black bg-opacity-50 hover:bg-opacity-75 text-white text-2xl rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        ←
      </button>
      
      <button
        onClick={() => goToSlide((currentIndex + 1) % cards.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black bg-opacity-50 hover:bg-opacity-75 text-white text-2xl rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        →
      </button>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: ${((currentIndex + 1) / cards.length) * 100}%; }
        }
      `}</style>
    </div>
  );
};

export default Carousel; 