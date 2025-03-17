"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const Dubai = () => {
  const { t } = useTranslation();
  
  return (
    <motion.div 
      className="mb-48"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p 
        className="text-white text-center mb-12 mt-0 text-sm"
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
        <h1 className="text-white text-center mb-0 text-6xl" style={{ maxWidth: "1200px", fontFamily: "Salina-TrialLight, sans-serif" }}>
        {t('dubai.title')}
        </h1>
      </motion.div>

      <motion.p 
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('dubai.date')}
      </motion.p>

      <motion.div
        className="relative w-5/6 h-[400px] mx-auto mb-16 pr-32 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image 
          src="/assets/dubainews.webp" 
          alt="Dubai" 
          layout="fill" 
          objectFit="cover" 
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-8 gap-16 px-4 md:px-8">
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full md:w-[450px] lg:w-[400px] xl:w-[600px] h-[400px] md:h-[500px] lg:h-[600px]">
            <Image 
              src="/assets/fayndoha.webp"
              alt="Dubai"
              layout="fill"
              objectFit="cover"
              className="rounded-lg w-5/6"
            />
          </div>
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 text-white text-left flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "Salina-TrialLight, sans-serif", lineHeight: "1.4" }}>
            {t('dubai.description')}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-light">
            {t('dubai.descriptiontwo')}
          </p>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Dubai;
