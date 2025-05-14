"use client";

import React from "react";

const VidContent = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Даваасамбуу Гэгээнзул.pdf"; // File path from the public folder
    link.download = "Даваасамбуу Гэгээнзул.pdf"; // Desired file name for download
    link.click();
  };

  return (
    <div className="w-[90%] p-10 z-[20] flex items-center">
      <div className="w-full flex flex-col md:flex-row gap-20 mt-24 items-center">
        <div className="flex flex-col gap-6 mb-6">
          <h1 className="text-6xl text-[#FFD700]">My CV</h1>
          <p className="text-lg max-w-[600px] text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <button
            onClick={handleDownload}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Download CV
          </button>
        </div>
        <iframe
          width="590"
          height="350"
          src="https://www.youtube.com/embed/cHxw47FbrEM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="ratio ratio-16x9 rounded-lg w-[450px] md:w-[590px] mr-6"
        ></iframe>
      </div>
    </div>
  );
};

export default VidContent;
