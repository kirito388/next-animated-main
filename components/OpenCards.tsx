"use client";

import { Projects } from "@/constants";
import { motion } from "framer-motion";
import React, { useState } from "react";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "100%",
    },
    collapsed: {
      width: "200px",
    },
  };

  return (
    <div className="bg-transparent w-full h-full flex flex-col gap-4 items-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-extrabold text-[#FFD700]">My Projects</h1>
        <p className="text-xl text-gray-200">Click on a card to view more details.</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        {Projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="cursor-pointer rounded-[20px] overflow-hidden transition-all duration-300 relative"
            variants={cardVariants}
            animate={index !== expandedIndex ? "collapsed" : "expanded"}
            transition={{ duration: 0.5 }}
            onClick={() => handleCardClick(index)}
            style={{
              height: "250px", // Set a base height for cards
            }}
          >
            {/* Video or Image background with text overlay */}
            <div className="relative h-full w-full">
              <video
                src={project.src} // Assuming project.src is the video URL
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "brightness(1.2)", // Brighten the video
                }}
              />
              {/* Optional: You can use this for an image instead */}
              {/* <img src={project.src} className="absolute inset-0 w-full h-full object-cover" /> */}

              {/* Dark Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                <div className="text-white font-semibold text-xl sm:text-2xl">
                  <h2>{project.name}</h2>
                  {index === expandedIndex && (
                    <p className="mt-2 text-gray-300 text-sm sm:text-base">{project.description}</p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OpenCards;
