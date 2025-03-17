'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './page.module.scss';

export default function Home() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 350;
  const easing = 0.20;

  const [easedScrollProgress, setEasedScrollProgress] = useState(0);

  const getScrollProgress = useCallback(() => {
    if (stickyMask.current && container.current) {
      const scrollProgress =
        stickyMask.current.offsetTop /
        (container.current.getBoundingClientRect().height - window.innerHeight);
      const delta = scrollProgress - easedScrollProgress;
      const newEasedProgress = easedScrollProgress + delta * easing;
      setEasedScrollProgress(newEasedProgress);
      return newEasedProgress;
    }
    return easedScrollProgress;
  }, [easedScrollProgress, easing]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (stickyMask.current && container.current) {
        const animate = () => {
          if (!stickyMask.current) return;
          const maskSizeProgress = targetMaskSize * getScrollProgress();
          stickyMask.current.style.webkitMaskSize = `${(initialMaskSize + maskSizeProgress) * 100}%`;
          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [getScrollProgress]);

  return (
    <>
      <main className={styles.main}>
        <h1 className="sr-only">Fayn- Video Gösterimi</h1>
        <div ref={container} className={styles.container}>
          <div ref={stickyMask} className={styles.stickyMask}>
            <video 
              autoPlay 
              muted 
              loop 
              title="Fayn" 
              aria-label="Fayn" 
              poster="/medias/nature-thumbnail.jpg"
            >
              <source src="/medias/nature.mp4" type="video/mp4" />
              Tarayıcınız video etiketini desteklemiyor.
            </video>
          </div>
        </div>
      </main>
    </>
  );
}
