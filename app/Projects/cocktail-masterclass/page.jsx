"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const CoctailMasterclass = () => {
   const { t } = useTranslation();
   
  return (
    <motion.div 
      className="mb-48"
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
        <h1 className="text-white text-center mb-4 text-6xl" style={{ maxWidth: "1200px", fontFamily: "Salina-TrialLight, sans-serif" }}>
        {t('coctailmasterclass.title')}</h1>
      </motion.div>

      <motion.p 
        className="text-white text-center mb-4 mt-5 text-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t('coctailmasterclass.date')}
      </motion.p>

      <motion.div
         className="relative w-full sm:w-3/4 md:w-10/12 h-[300px] sm:h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
            src="/assets/coctaildetail1.webp"
            alt="Coctail Masterclass etkinliği"
            fill
            className="object-cover"
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between w-full mt-8 lg:px-20">
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-full max-w-[400px] h-[500px] sm:h-[600px]">
            <Image
                src="/assets/coctaildetail2.webp"
                alt="Coctail Masterclass katılımcıları"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.div 
          className="text-white w-full lg:w-1/2 text-left mt-10 lg:mt-0 px-4 lg:px-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="mb-8 text-4xl lg:w-full xl:w-full" style={{ fontFamily: "Salina-TrialLight, sans-serif", lineHeight: "1.4" }}>
          {t('coctailmasterclass.description')}
          </h1>
          <p className="text-xl leading-relaxed font-light w-full" style={{ lineHeight: "1.4" }}>
          {t('coctailmasterclass.descriptiontwo')}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CoctailMasterclass;
