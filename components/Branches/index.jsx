"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const Branches = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1024);
  const { t } = useTranslation();

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const calculatePosition = (offset) => {
    let positions;

    if (screenWidth < 640) {
      positions = {
        "-1": { x: -200, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: -5 },
        "0": { x: 0, y: 0, scale: 1.2, opacity: 1, zIndex: 2, rotate: 0 },
        "1": { x: 200, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: 5 },
      };
    } else if (screenWidth < 1024) {
      positions = {
        "-1": { x: -300, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: -6 },
        "0": { x: 0, y: 0, scale: 1.2, opacity: 1, zIndex: 2, rotate: 0 },
        "1": { x: 300, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: 6 },
      };
    } else {
      positions = {
        "-1": { x: -350, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: -8 },
        "0": { x: 0, y: 0, scale: 1.2, opacity: 1, zIndex: 2, rotate: 0 },
        "1": { x: 400, y: 0, scale: 1, opacity: 0.7, zIndex: 0, rotate: 8 },
      };
    }
    return positions[offset] || { x: 0, y: -500, scale: 0, opacity: 0, zIndex: -1, rotate: 0 };
  };

  const getVisibleImages = () => {
    if (!images || images.length === 0) return [];
    const visibleIndexes = [-1, 0, 1];
    return visibleIndexes.map((offset) => {
      const index = (currentIndex + offset + images.length) % images.length;
      return {
        src: images[index]?.src || "",
        title: images[index]?.title || "",
        description: images[index]?.description || "",
        position: calculatePosition(offset.toString()),
        key: index,
      };
    });
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  const visibleImages = getVisibleImages();
  const centerImage = visibleImages.find((img) => img.position.zIndex === 2);

  return (
    <>
      <div
        {...swipeHandlers}
        className="flex flex-col items-center justify-center gap-2 sm:gap-32 mb-48 py-16 px-2 min-h-[350px] sm:min-h-[800px] md:min-h-[600px] bg-[#E4E0D8] cursor-grab select-none touch-none"
      >
        <div className="flex flex-col items-center mb-28 md:mb-0">
          <h2
            className="text-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl sm:mb-32 md:mb-0"
            style={{ fontFamily: "Salina-Book, sans-serif", fontStyle: "italic" }}
          >
            {t("branches.title")}
          </h2>
        </div>
        <div className="flex items-center justify-center gap-1 sm:gap-8 md:gap-4 w-full max-w-[1600px] overflow-x-visible">
          <div className="relative w-full min-h-[370px] sm:min-h-[100px] md:min-h-[300px] flex justify-center items-center overflow-visible mb-6">
            <div className="w-1/2 h-full relative flex justify-center items-center transform-style-preserve-3d perspective-[1500px]">
              {visibleImages.map(({ src, position, key }) => (
                <motion.div
                  key={key}
                  className="absolute sm:max-w-full overflow-hidden flex items-center justify-center 
                            w-[60vw] sm:w-[40vw] md:w-[40vw] lg:w-[30vw] max-w-[400px] 
                            h-[400px] sm:h-[400px] md:h-[100px] lg:h-[400px] 
                            will-change-transform transform-style-preserve-3d 
                            transform-origin-center-center backface-hidden"
                  initial={false}
                  animate={{
                    x: position.x,
                    y: position.y,
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                    rotate: position.rotate,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <Image
                    src={src}
                    alt={`Branch ${key}`}
                    width={1000}
                    height={900}
                    quality={100}
                    unoptimized={true}
                    className="w-full h-full object-cover rounded-3xl shadow-lg pointer-events-none"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {centerImage && (
          <div className="text-center mt-24 sm:mt-56 md:mt-2">
            {centerImage.description && (
              <p className="text-black text-md sm:text-xl sm:mt-64 md:mt-2 w-full px-4 sm:px-6 text-center">
                {centerImage.description}
              </p>
            )}
            <h3
              className="text-black text-xl sm:text-3xl mt-2 sm:mt-4"
              style={{ fontFamily: "Salina-Book, sans-serif" }}
            >
              {centerImage.title}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Branches;
