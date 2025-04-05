import React from "react";
import "../../App.css";
  

const India = () => {
  // Generate 24 spokes for the Ashoka Chakra
  const spokes = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 h-48 relative overflow-hidden">
        {/* Flag Container */}
        <div className="w-full h-full animate-wave">
          {/* Saffron Band */}
          <div className="bg-orange-600 h-1/3 w-full"></div>

          {/* White Band with Ashoka Chakra */}
          <div className="bg-white h-1/3 w-full relative flex items-center justify-center">
            <div className="relative w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
              {/* Chakra Spokes */}
              {spokes.map((spoke) => (
                <div
                  key={spoke}
                  className="absolute w-0.5 h-6 bg-blue-600 origin-bottom"
                  style={{ transform: `rotate(${spoke * 15}deg)` }}
                ></div>
              ))}

              {/* Inner Circle */}
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Green Band */}
          <div className="bg-green-600 h-1/3 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default India;
