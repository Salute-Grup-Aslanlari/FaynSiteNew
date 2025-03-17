"use client";

import React from "react";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import { motion } from "framer-motion";

const MissMrmodel = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="mb-36 px-4 md:px-8">
                <motion.p
                    className="text-white text-center mb-12 mt-10 text-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    002
                </motion.p>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1
                        className="text-white text-center mb-6 text-4xl md:text-6xl max-w-4xl"
                        style={{ fontFamily: "Salina-TrialLight, sans-serif" }}
                    >
                        {t('missandmrmodel.title')}
                    </h1>
                </motion.div>

                <motion.p
                    className="text-white text-center mb-4 mt-5 text-sm"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    {t('missandmrmodel.date')}
                </motion.p>
                
                <motion.div
                    className="relative w-full sm:w-3/4 md:w-11/12 h-[300px] sm:h-[400px] mx-auto mb-16 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/beachdetail1.webp"
                        alt="Miss and Mr Model Event"
                        layout="fill"
                        objectFit="cover"
                    />
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-between w-full mt-8 lg:px-20">
                    <motion.div
                        className="w-full lg:w-1/2 flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.3, delay: 0.3 }}
                    >
                        <div className="relative w-full max-w-lg h-[400px] md:h-[600px]">
                            <Image
                                src="/assets/beachdetail2.webp"
                                alt="Fashion Show Miss and Mr Model"
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
                        transition={{ duration: 1.5, delay: 0.5 }}
                    >
                        <h2
                            className="mb-8 text-2xl md:text-4xl leading-tight"
                            style={{ fontFamily: "Salina-TrialLight, sans-serif" }}
                        >
                            {t('missandmrmodel.description')}
                        </h2>
                        <p
                            className="text-lg md:text-xl leading-relaxed font-light"
                        >
                            {t('missandmrmodel.descriptiontwo')}
                        </p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default MissMrmodel;