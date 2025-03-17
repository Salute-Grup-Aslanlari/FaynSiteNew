"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const ErcanPage = () => {
  const { t } = useTranslation();

  return (
    <motion.div 
      className="mb-36 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p 
        className="text-white text-center mb-12 mt-10 text-sm"
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
        <h1 className="text-white text-center mb-4 text-4xl md:text-5xl lg:text-6xl max-w-[1200px]" style={{ fontFamily: "Salina-TrialLight, sans-serif" }}>
          {t('ercan.title')}
        </h1>
      </motion.div>

      <motion.p 
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('ercan.date')}
      </motion.p>

      <motion.div
        className="relative w-full sm:w-3/4 md:w-11/12 h-[300px] sm:h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image 
          src="/assets/ercan2.jpg" 
          alt="Ercan Fashion Event" 
          layout="fill" 
          objectFit="cover" 
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full mt-2">
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full md:w-[400px] h-[500px] md:h-[600px]">
            <Image 
              src="/assets/ercan3.jpg"
              alt="Ercan Fashion Show Katılımcıları"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div 
          className="text-white w-4/5 lg:w-1/2 text-left lg:ml-[-10px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <h1 className="mb-8 text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: "Salina-TrialLight, sans-serif", lineHeight: "1.4" }}>
            {t('ercan.description')}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-light w-full" style={{ lineHeight: "1.4" }}>
            {t('ercan.descriptiontwo')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ErcanPage;