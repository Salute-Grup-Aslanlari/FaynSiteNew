import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { quality } from "../../data";
import Image from "next/image";

export const Quality = () => {
  const { t } = useTranslation();
  const [currentTitle, setCurrentTitle] = useState(quality[0].title);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setCurrentTitle(quality[activeIndex].title);
  }, [activeIndex]);

  return (
    <>
      <div ref={containerRef} className="relative w-full mb-24 mt-36 px-4 md:px-8">
        <h1 className="sr-only">Fayn Kalite Standartları</h1>
        {quality.map((item, index) => (
          <ImageSection
            key={index}
            data={item}
            index={index}
            setActiveIndex={setActiveIndex}
            currentTitle={currentTitle}
            titleTranslation={t(`quality.${item.title.toLowerCase()}`)}
          />
        ))}
      </div>
    </>
  );
};

const ImageSection = ({ data, index, setActiveIndex, currentTitle, titleTranslation }) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    let prevScroll = 0;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > prevScroll && latest >= 0.5 && latest <= 1) {
        setActiveIndex(index);
      } else if (latest < prevScroll && latest < 0.2) {
        if (index > 0) {
          setActiveIndex(index - 1);
        }
      }
      prevScroll = latest;
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, setActiveIndex]);

  const initial = index === 0 ? { y: 100, opacity: 0 } : false;

  return (
    <div ref={sectionRef} className="flex items-center justify-center sticky top-20 mb-20">
      <motion.div
        className="w-full max-w-full sm:max-w-[500px] mx-auto px-4 py-10 relative"
        style={{
          y,
          opacity,
        }}
        initial={initial}
      >
        <Image
          width={200}
          height={400}
          src={data.src}
          alt={data.title}
          loading="lazy"
          className="w-full rounded-lg shadow-lg block top-10 mb-20"
        />
        <motion.div
          className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 text-[6rem] sm:text-[12rem] text-white z-10 font-light"
          style={{ fontFamily: 'Salina-Book, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentTitle === data.title ? 1 : 0 }}
          exit={{ opacity: 0 }}
          key={currentTitle}
        >
          {titleTranslation}
        </motion.div>
      </motion.div>
    </div>
  );
};
