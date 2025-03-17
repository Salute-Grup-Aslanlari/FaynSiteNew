"use client";
import React, { useState, useEffect } from "react";
import { locations } from "../../data";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function LocationsPage() {
  const { t } = useTranslation();
  const [selectedBranch, setSelectedBranch] = useState(locations[0]);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [selectedBranch]);

  const handleOutsideClick = (e) => {
    if (e.target.id === "menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="w-full relative" onClick={handleOutsideClick}>
        {isMenuOpen && (
          <div
            id="menu-overlay"
            className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-all duration-300"
          ></div>
        )}

        <div className="flex flex-col md:flex-row mt-10 h-auto text-white">
          <div className="w-full md:hidden p-4 relative flex justify-center items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white text-lg text-pretty p-2 bg-black rounded-full border border-white"
              style={{
                fontFamily: "Salina-Book, sans-serif",
                lineHeight: "1.4",
                fontWeight: "300",
              }}
            >
              {t("location.select_branch")}
            </button>
          </div>

          {isMenuOpen && (
           <ul className="mt-2 relative left-0 w-full z-50 bg-black p-4 animate-slide-in">
              {locations.map((branch) => (
                <li
                  key={branch.id}
                  className="cursor-pointer pl-12 font-bold p-4 text-xl text-white transition-all duration-300 ease-in-out hover:text-yellow-300"
                  style={{
                    fontFamily: "Salina-Book, sans-serif",
                    lineHeight: "1.4",
                    fontWeight: "300",
                  }}
                  onClick={() => {
                    setSelectedBranch(branch);
                    setIsMenuOpen(false);
                  }}
                >
                  {branch.name}
                </li>
              ))}
            </ul>
          )}

          <div className="w-full md:w-1/2 p-4 md:p-10 border-b md:border-b-0 hidden md:block">
            <h1
              className="text-white text-center mt-1 mb-20 md:text-3xl lg:text-5xl opacity-0 animate-fade-in"
              style={{
                fontFamily: "Salina-TrialLight, sans-serif",
                lineHeight: "1.4",
              }}
            >
              {t("location.title")}
            </h1>
            <ul>
              {locations.map((branch) => (
                <li
                  key={branch.id}
                  className="cursor-pointer pl-12 p-4 text-xl md:text-3xl transition-all duration-300 ease-in-out hover:translate-x-3 hover:text-yellow-300 animate-fade-in"
                  style={{
                    fontFamily: "Salina-Book, sans-serif",
                    lineHeight: "1.0",
                    fontWeight: "300",
                  }}
                  onClick={() => setSelectedBranch(branch)}
                >
                  {branch.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-full p-4 md:p-14 flex flex-col md:flex-row gap-36 ml-auto mr-0 justify-end">
            {selectedBranch && (
              <div
                className="w-full md:w-1/3 sm:w-[500px] transition-all duration-500 ease-in-out hover:scale-105"
                key={animationKey}
              >
                <Image
                  src={selectedBranch.image}
                  alt={selectedBranch.name}
                  className="w-full h-auto md:h-[700px] object-cover rounded-2xl animate-slide-in"
                  width={700}
                  height={700}
                />
              </div>
            )}
            <div className="w-3/4 md:w-1/2 flex flex-col mb-8 animate-slide-in">
              <div className="mb-8">
                <p className="text-lg md:text-xl font-extralight opacity-0 animate-fade-in">
                  {selectedBranch.location}
                </p>
                <h2
                  className="text-3xl md:text-3xl mb-14 opacity-0 animate-fade-in"
                  style={{ fontFamily: "Salina-BookItalic, sans-serif" }}
                >
                  {selectedBranch.name}
                </h2>
                <p className="text-md md:text-lg font-extralight mb-4 opacity-0 animate-fade-in">
                  {selectedBranch.description}
                </p>
                <p className="text-md md:text-xl font-extralight mb-2 opacity-0 animate-fade-in">
                  <span className="font-bold">{t("location.reservation")}:</span>{" "}
                  {selectedBranch.reservation}
                </p>
                <p className="text-md md:text-xl font-extralight opacity-0 animate-fade-in">
                  {selectedBranch.web}
                </p>
              </div>
              <div className="lg:w-2/3 mt-8">
                <iframe
                  src={selectedBranch.mapUrl}
                  className="rounded-lg w-full h-64 md:h-[420px] sm:h-[700px]"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: selectedBranch?.name,
            image: selectedBranch?.image,
            address: {
              "@type": "PostalAddress",
              streetAddress: selectedBranch?.location,
              addressLocality: "Türkiye",
              addressCountry: "TR",
            },
            telephone: selectedBranch?.reservation,
            url: selectedBranch?.web,
          }),
        }}
      />
    </>
  );
}
