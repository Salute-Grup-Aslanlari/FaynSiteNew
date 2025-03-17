'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const Card = ({ i, title, description, src, link, color, progress, range, targetScale, date }) => {
  const { t } = useTranslation();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container.current ? container : null,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 2], [2, 0]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [localDate, setLocalDate] = useState("")
  useEffect(() => {
    setLocalDate(
      new Date(date).toLocaleDateString()
    )
  }, [date])
  
  return (
    <div ref={container} className="h-[90vh] sm:h-[10vh] md:h-[110vh] flex items-center justify-center sticky top-5">
     <motion.div
        style={{ backgroundColor: color, scale, top: `calc(${i * 50}px)` }}
        className="relative flex flex-col h-[500px] w-[1000px] rounded-3xl p-10 transform-origin-top"
      >
        <h2 className="text-center lg:text-4xl sm:text-2xl" style={{ fontFamily: 'Salina-book, sans-serif' }}>{t(title)}</h2>
        <div className="flex h-full lg:mt-2 sm:gap-8 lg:gap-12 flex-col sm:flex-row">
          <div className="w-full sm:w-3/5 relative top-10">
            <p className="text-center lg:text-2xl sm:text-lg leading-7 first-letter:text-xl font-bold" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.4'}}>
            {t(description)}
            </p>
            <span className="mt-6 mb-2 flex flex-col items-center gap-4" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 150, lineHeight: '1.2'}}>
            <Link
                href={link}
                className="text-sm sm:text-lg cursor-pointer border-black px-12 py-2 sm:px-8 sm:py-2 border-[0.5px] sm:border-[1px]"
              >
                SEE MORE
              </Link>
              <p className="lg:text-lg text-black text-center" style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.4'}}>{localDate}</p>
            </span>
          </div>
          <div className="w-full sm:w-4/5 md:h-[90%] sm:h-10 lg:top-10 h-[90%] rounded-3xl overflow-hidden flex justify-center items-center relative">
            <motion.div className="w-full h-full relative" style={{ scale: imageScale }}>
              <Image
                fill
                src={src ? src : '/assets/flavor.jpg'}
                alt="image"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
