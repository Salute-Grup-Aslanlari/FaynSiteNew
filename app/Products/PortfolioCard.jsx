import React, { useState } from "react";
import Image from "next/image";
import styles from "./PortfolioCard.module.css";

export const PortfolioCard = ({
  ImageHref,
  category,
  title,
  description,
  showCard,
  leftImage,
  rightImage,
  loading,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVisible = showCard === "all" || showCard === category.toLowerCase();

  const handleOpenPopup = () => setIsOpen(true);
  const handleClosePopup = () => setIsOpen(false);

  return (
    <>
      <div className={`w-full md:w-1/2 xl:w-1/4 px-0 mx-0 ${isVisible ? "block" : "hidden"}`}>
        <div className={styles.card} onClick={handleOpenPopup}>
          <Image
            src={ImageHref}
            alt={title}
            layout="responsive"
            width={500}
            height={500}
            className="w-full h-full object-cover portfolio"
            loading={loading}
          />
          <div className="absolute top-0 left-0 p-4 text-white bg-gradient-to-br from-black/50 to-transparent via-black/10 w-full h-full">
            <p className={styles.description}>
              {description}
            </p>
            <h3 className={styles.title}>
              {title}
            </h3>
          </div>
        </div>

        <PopupOverlay 
          isOpen={isOpen} 
          onClose={handleClosePopup}
          leftImage={leftImage}
          rightImage={rightImage}
          title={title}
        />
      </div>
    </>
  );
};

const PopupOverlay = ({ isOpen, onClose, leftImage, rightImage, title }) => {
  if (!isOpen) return null;
  
  return (
    <div className={`${styles.popup_overlay} ${isOpen ? styles.opened : ""}`} onClick={onClose}>
      <div className={styles.popup_content} onClick={e => e.stopPropagation()}>
        <Image
          src={leftImage}
          width={1800}
          height={1000}
          className={`${styles.popup_image} ${styles.left}`}
          alt={`${title} - Left Image`}
          loading="lazy"
          quality={100}
        />
        <Image
          src={rightImage}
          width={700}
          height={400}
          className={`${styles.popup_image} ${styles.right}`}
          alt={`${title} - Right Image`}
          loading="lazy"
          quality={100}
        />
      </div>
    </div>
  );
};