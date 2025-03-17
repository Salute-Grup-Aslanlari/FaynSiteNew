"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MissMrmodel = () => {
  return (
    <>

      <div className="mb-36">
        <motion.p
          className="text-white text-center mb-12 mt-10 text-xs sm:text-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          004
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-white text-center mb-6 text-4xl sm:text-5xl md:text-6xl"
            style={{
              maxWidth: "1200px",
              fontFamily: "Salina-TrialLight, sans-serif",
            }}
          >
            Fayn Presents: Love Fest; A Night of Cocktails, Fashion, and Celebration
          </h1>
        </motion.div>

        <motion.p
          className="text-white text-center mb-4 mt-5 text-xs sm:text-sm"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          August 30th 2024
        </motion.p>

        <motion.div
          className="relative w-full sm:w-3/4 md:w-10/12 h-[300px] sm:h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/assets/lovefestyatay.webp"
            alt="Love Fest Event"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between w-full mt-8 md:px-16">
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
          >
            <div className="relative w-5/6 h-[400px] sm:h-[600px]">
              <Image
                src="/assets/lovefestdikey.webp"
                alt="Love Fest Fashion Show"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-white w-full md:w-1/2 text-left mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <h1
              className="mb-8 text-2xl sm:text-3xl md:text-4xl"
              style={{
                fontFamily: "Salina-TrialLight, sans-serif",
                lineHeight: "1.4",
              }}
            >
              Fayn proudly hosted Love Fest, an unforgettable evening where style, flavor, and connection came together in perfect harmony.
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed font-light"
              style={{ lineHeight: "1.4" }}
            >
              The event brought together a vibrant crowd to celebrate love in all its forms, with an atmosphere filled with energy, creativity, and of course, exceptional cocktails.  
              Guests indulged in Fayn’s signature handcrafted cocktails, each sip delivering a unique blend of flavors designed to elevate the experience. 
              As the night unfolded, a spectacular fashion show took center stage, showcasing stunning designs that embodied elegance and innovation.
              <br /><br />
              With the support of Salute Group as our valued sponsor, Love Fest became more than just an event; it was a celebration of passion, artistry, and unforgettable moments.  
              Stay tuned for more extraordinary experiences from Fayn where every event is crafted with taste, style, and a touch of magic.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MissMrmodel;