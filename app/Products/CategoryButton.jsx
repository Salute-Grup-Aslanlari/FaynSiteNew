import React from "react";

export const CategoryButton = ({ active, onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-block bg-black text-white py-2 px-5 text-center 
        transition-transform duration-300 ease-in-out hover:scale-105 md:py-3 lg:px-8 
        ${active ? "activeClasses bg-primary text-white" : 
        "inactiveClasses text-body-color dark:text-dark-6 hover:bg-primary hover:text-white"}`}
    >
      <p
        style={{
          fontSize: "14px",
          fontFamily: "Source Sans 3, sans-serif",
          fontWeight: 100,
        }}
      >
        {label}
      </p>
    </button>
  );
};
