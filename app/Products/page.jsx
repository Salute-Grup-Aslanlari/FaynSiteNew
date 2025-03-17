"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CategoryButton } from "./CategoryButton";
import { PortfolioCard } from "./PortfolioCard";
import { PORTFOLIO_ITEMS} from "../../data";

const Portfolio = () => {
  const { t } = useTranslation();
  const [showCard, setShowCard] = useState("all");

  const categories = [
    { id: "all", label: "product.all" },
    { id: "foods", label: "product.dishes" },
    { id: "cocktails", label: "product.cocktail" }
  ];

  return (
    <section className="pt-20 lg:pt-[80px] bg-[#E4E0D8]">
      <div className="container mx-auto px-0 max-w-full">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="text-lg text-black text-center mt-4 mb-28">
              {t("product.title")}
            </h1>
            <div className="absolute top-[210px] md:top-[90x] lg:top-[220px] left-1/2 transform -translate-x-1/2 w-[1px] h-20 sm:h-2 md:h-20 bg-black"></div>
            <div className="mx-auto mb-[10px] max-w-[510px] text-center">
              <span
                className="text-primary mb-6 block text-5xl mt-4 text-black"
                style={{ fontFamily: "Salina-TrialLight, sans-serif" }}
              >
                {t("product.our")}{" "}
                <span
                  className="text-black mt-4"
                  style={{ fontFamily: "Salina-BookItalic, sans-serif" }}
                >
                  ({t("product.finest")})
                </span>{" "}
                {t("product.drinks")}
              </span>
              <p className="text-black text-body-color mt-6 dark:text-dark-6 text-xl font-light">
                {t("product.description")}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex flex-wrap justify-center mb-16 mt-10 space-x-1">
              {categories.map(category => (
                <li key={category.id} className="mb-1">
                  <CategoryButton 
                    active={showCard === category.id}
                    onClick={() => setShowCard(category.id)}
                    label={t(category.label)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-0 sm:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioCard
              key={`${item.category}-${index}`}
              ImageHref={item.ImageHref}
              category={item.category}
              title={item.title}
              description={item.description}
              leftImage={item.leftImage}
              rightImage={item.rightImage}
              showCard={showCard}
              loading={index > 0 ? "lazy" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
