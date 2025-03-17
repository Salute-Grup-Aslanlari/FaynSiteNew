'use client';

import React from "react";
import { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Home() {
  const { t } = useTranslation();
  const phrase = t('weAreFaynDescription');
  let refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top 30%",
        end: `+=${window.innerHeight / 3}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.5,
    });
  };

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, i) => (
      <span key={word + "_" + i} className="mr-4 sm:mr-6">
        {splitLetters(word)}
      </span>
    ));
  };

  const splitLetters = (word) => {
    return word.split("").map((letter, i) => (
      <span
        key={letter + "_" + i}
        ref={(el) => {
          refs.current.push(el);
        }}
        className="opacity-20"
      >
        {letter}
      </span>
    ));
  };

  return (
    <main
      ref={container}
      className="flex items-center justify-center h-[700px] sm:h-[900px] lg:h-[900px] mt-[5vh] sm:mt-[8vh] lg:mt-[10vh] text-gray-300 px-4"
    >
      <div className="w-full sm:max-w-[80%] lg:max-w-[70%] flex flex-wrap justify-center text-3xl sm:text-2xl md:text-6xl lg:text-6xl text-center leading-snug sm:leading-normal">
        {splitWords(phrase)}
      </div>
    </main>
  );
}
