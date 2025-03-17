"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const IzmirFashionWeek = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div 
        className="mb-48 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p 
          className="text-white text-center mb-12 mt-10 text-xs sm:text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          001
        </motion.p>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-white text-center mb-4 text-4xl sm:text-5xl md:text-6xl max-w-3xl" style={{ fontFamily: "Salina-TrialLight, sans-serif" }}>
            {t('izmirfashionweek.title')}
          </h1>
        </motion.div>

        <motion.p 
          className="text-white text-center mb-4 mt-5 text-xs sm:text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t('izmirfashionweek.date')}
        </motion.p>

        <motion.div
          className="relative w-full sm:w-3/4 md:w-11/12 h-[300px] sm:h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image src="/assets/fashiondetail1.webp" alt="Izmir Fashion Week Runway Show" layout="fill" objectFit="cover" />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between w-full mt-8 items-center md:items-start">
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }} 
          >
            <div className="relative w-full max-w-[400px] h-[500px] sm:h-[600px]">
              <Image 
                src="/assets/fashiondetail2.webp"
                alt="Models at Izmir Fashion Week"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div 
            className="text-white w-full md:w-1/2 text-left mt-8 md:mt-0 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-6 text-2xl sm:text-3xl md:text-4xl" style={{ fontFamily: "Salina-TrialLight, sans-serif", lineHeight: "1.4" }}>
              {t('izmirfashionweek.description')}
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed font-light w-full" style={{ lineHeight: "1.4" }}>
              {t('izmirfashionweek.descriptiontwo')}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default IzmirFashionWeek;