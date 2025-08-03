import React from "react";
import balls from "../assets/images/balls.png"

// Each palette is an array of 4 colors
const palettes = [
  // Top row
  [
    ["#F6E7D8", "#EFD7DE", "#EADDD7", "#E9CFC7"], // Palette 1
    null, // Text: Palettes that are
    ["#6B87B1", "#A2B2C8", "#E6DFDB", "#D9D2CF"], // Palette 2
    null, // Text: passing the
  ],
  // Bottom row
  [
    null, // Text: VIBE
    ["#23261F", "#474A43", "#7A8577", "#E6DCC3"], // Palette 3
    null, // Text: CHECK!
    ["#FDF7E2", "#E2D1B2", "#A12C2C", "#3B2C2C"], // Palette 4
  ],
];

// Texts for the text squares
const texts = [
  ["", "Palettes\nthat are", "", "passing\nthe"],
  ["VIBE", "", "CHECK!", ""],
];

const CinzelText = ({ children }) => (
  <span className="font-[Cinzel] text-2xl text-black text-center leading-tight whitespace-pre-line drop-shadow">
    {children}
  </span>
);

const ColorPallete = () => {
  return (
    <div>
      <div className="w-full max-w-2xl md:max-w-5xl mx-auto grid grid-cols-4 grid-rows-2 gap-0 rounded-2xl overflow-hidden bg-[#C4F2FF] shadow-lg">
        {/* Top row */}
        {palettes[0].map((palette, idx) =>
          palette ? (
            <div key={idx} className="flex flex-col aspect-square w-full">
              {palette.map((color, i) => (
                <div
                  key={i}
                  className="w-full flex-1"
                  style={{ background: color }}
                />
              ))}
            </div>
          ) : (
            <div
              key={idx}
              className="flex flex-col justify-center items-center aspect-square w-full bg-[#C4F2FF]"
            >
              <span className="font-[Cinzel] text-base xs:text-lg sm:text-xl md:text-2xl text-black text-center leading-tight whitespace-pre-line drop-shadow">
                {texts[0][idx]}
              </span>
            </div>
          )
        )}
        {/* Bottom row */}
        {palettes[1].map((palette, idx) =>
          palette ? (
            <div key={idx} className="flex flex-col aspect-square w-full">
              {palette.map((color, i) => (
                <div
                  key={i}
                  className="w-full flex-1"
                  style={{ background: color }}
                />
              ))}
            </div>
          ) : (
            <div
              key={idx}
              className="flex flex-col justify-center items-center aspect-square w-full bg-[#C4F2FF]"
            >
              <span className="font-[Cinzel] text-base xs:text-lg sm:text-xl md:text-2xl text-black text-center leading-tight whitespace-pre-line drop-shadow">
                {texts[1][idx]}
              </span>
            </div>
          )
        )}
      </div>
      <div
        className="w-full flex justify-center mt-5 mb-5"
        style={{
          backgroundImage: `url(${balls})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          height: "170px",
        }}
      ></div>
    </div>
  );
};

export default ColorPallete;