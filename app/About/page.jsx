"use client";

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion } from "framer-motion";

const logos = [
  "/assets/logos/absolut.webp",
  "/assets/logos/arkaslogo.webp",
  "/assets/logos/hendricksgin.webp",
  "/assets/logos/izmirfashionweek.webp",
  "/assets/logos/missmodel.webp",
  "/assets/logos/pernordricord.webp",
];

const AboutUs = () => {
  const { t } = useTranslation();
  const [countries, setCountries] = useState(0);
  const [branches, setBranches] = useState(0);
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountries(prevCountries => prevCountries < 3 ? prevCountries + 1 : prevCountries);
      setBranches(prevBranches => prevBranches < 6 ? prevBranches + 1 : prevBranches);
      setCustomers(prevCustomers => prevCustomers < 1500 ? prevCustomers + 50 : prevCustomers);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="mb-36">
       <div className="flex flex-col lg:flex-row justify-center w-full">
      <div className="w-full lg:w-full">
        <div className="relative w-full lg:h-[700px] sm:h-[250px] mb-4">
          <Image
            src="/assets/aboutus/aboutus1.webp"
            alt="About Us"
            layout="responsive"
            width={1600}
            height={900}
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl"
          />
        </div>
      </div>

      <div className="text-white w-full text-center lg:text-left lg:mt-12 lg:ml-16 px-4 sm:px-8 md:px-12">
        <motion.h1
          className="mb-4 text-5xl lg:text-3xl xl:text-6xl"
          style={{
            fontFamily: "Salina-TrialLight, sans-serif",
            lineHeight: "1.4",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t("aboutus.title")}
        </motion.h1>

        <motion.p
          className="text-xl sm:text-4xl lg:text-2xl leading-relaxed font-light lg:w-4/5"
          style={{ lineHeight: "1.6" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {t("aboutus.description")}
        </motion.p>

        <div className="flex justify-center lg:justify-start items-center gap-12 mt-10">
          <div className="flex flex-col items-center">
            <motion.span
              className="text-4xl lg:text-5xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {countries < 10 ? `0${countries}` : countries}
            </motion.span>
            <div className="text-sm lg:text-lg font-light mt-2">
              {t("aboutus.countries")}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <motion.span
              className="text-4xl lg:text-5xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              {branches < 10 ? `0${branches}` : branches}
            </motion.span>
            <div className="text-sm lg:text-lg font-light mt-2">
              {t("aboutus.branches")}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <motion.span
              className="text-4xl lg:text-5xl font-bold"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 3 }}
            >
              {customers.toLocaleString()}
            </motion.span>
            <div className="text-sm lg:text-lg font-light mt-2">
              {t("aboutus.customers")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

      <div className="flex flex-col-reverse lg:flex-row mt-4 px-8 sm:px-0 lg:mt-24">
        <div className="w-full lg:w-1/2 flex flex-col items-center sm:items-start lg:pl-20 mt-24">
          <motion.div
            className="text-white text-center sm:text-left mt-10 sm:mt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p 
            className="text-2xl sm:text-4xl lg:text-3xl leading-relaxed"
            style={{ lineHeight: '1.2' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
              {t('aboutus.descriptionone')}
              <br></br>
              {t('aboutus.descriptiontwo')}
              
            </p>
          </motion.div>

          <div className="relative w-full mt-40">
            <div className="absolute top-[-90px] lg:left-48 text-center z-10">
              <motion.h2
                className="text-white text-lg sm:text-4xl font-bold"
                style={{ fontSize: "28px", fontFamily: 'Salina-TrialLight, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.8 }}
              >
               {t('aboutus.titleone')}
              </motion.h2>
            </div>
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex space-x-16"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              >
                {[...logos, ...logos, ...logos].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`Logo ${index + 1}`}
                    width={1200}
                    height={600}
                    className="w-45 h-20 lg:w-95 lg:h-20 mt-10 mb-20"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-full flex justify-center sm:justify-end pl-0 sm:pl-36">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[800px] -top-30">
            <Image
              src="/assets/aboutus/aboutus2.webp"
              alt="Our Mission"
              layout="intrinsic"
              width={700}
              height={350}
              objectFit="cover"
              objectPosition="center"
              className="rounded-xl sm:mt-32 lg:mt-20"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row mt-2 lg:mt-32 sm:mt-72 xl:mt-60 px-4 sm:px-8 lg:px-0">
        <div className="w-full lg:w-1/2 flex items-center lg:pr-20 justify-center lg:justify-end pl-4 lg:pl-36 relative">
          <div className="text-white text-center lg:text-left mb-10 lg:mb-60 relative z-10 top-40 sm:top-36 lg:top-16">
            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 w-32 h-32 sm:w-50 sm:h-60 lg:w-40 lg:h-40">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="w-full h-full"
              >
                <Image
                  src="/assets/aboutus/limon.png"
                  alt="Lemon Slice"
                  width={160}
                  height={160}
                  objectFit="contain"
                />
              </motion.div>
            </div>
            <motion.p
              className="sm:text-4xl w-[100%] max-w-4xl lg:text-3xl font-light mt-32 lg:mt-80 leading-relaxed"
              style={{ fontFamily: 'Source Sans 3, sans-serif', fontWeight: 100, lineHeight: '1.6'}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
             {t('aboutus.descriptionthree')}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end pl-0 lg:pl-36">
          <div className="relative w-full max-w-[800px] h-[300px] sm:h-[400px] lg:h-[500px]">
            <motion.h2
              className="text-white text-3xl sm:text-4xl lg:text-6xl absolute top-[20%] sm:top-[30%] left-1/2 lg:left-[-20%] transform -translate-x-1/2 -translate-y-1/2 
                z-20 p-4 sm:p-6 rounded-lg w-[95%] max-w-3xl leading-snug text-center lg:text-right"
              style={{ fontFamily: 'Salina-TrialLight, sans-serif', fontWeight: 400 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
             {t('aboutus.titletwo')}
            </motion.h2>
            <Image
              src="/assets/aboutus/aboutus3.webp"
              alt="Factory Production"
              layout="intrinsic"
              width={900}
              height={600}
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default AboutUs;
