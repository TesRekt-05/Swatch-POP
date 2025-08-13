import React from 'react'
import moreBalls from "../assets/images/moreBalls.png"
import bra from "../assets/images/bra.png"
import clothes from "../assets/images/clothes.jpeg"
import books from "../assets/images/books.jpg"
import home from "../assets/images/BILLI.png"
import stationary from "../assets/images/stationary.jpg"

const categories = [
  { img: clothes, label: "Clothes" },
  { img: books, label: "Books" },
  { img: home, label: "Home Decor" },
  { img: stationary, label: "Stationaries" },
];

const gyaan = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-6 px-2 sm:py-12 sm:px-4 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${moreBalls})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-6 md:mb-12">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center md:items-start px-2 md:px-4">
          <h2 className="font-[Cinzel] text-xl xs:text-2xl sm:text-3xl md:text-4xl text-black text-center md:text-left mb-4 md:mb-8 leading-snug">
            Already know what you <br /> want? Let’s match it to <br /> your vibe.
            <br /><br />
            Pick your item, we’ll <br /> bring the aesthetic!
          </h2>
        </div>
        {/* Bra Image */}
        <div className="flex-1 flex justify-center md:justify-end px-2 md:px-4 mt-4 md:mt-0">
          <img
            src={bra}
            alt="Bra"
            className="rounded-full object-cover w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] sm:w-[260px] sm:h-[260px] md:w-[320px] md:h-[320px] shadow-lg"
            style={{ background: "transparent" }}
          />
        </div>
      </div>
      {/* Category Boxes */}
      <div className="w-full max-w-2xl sm:max-w-3xl md:max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-4 md:mt-8 px-2 sm:px-4">
        {categories.map((cat, idx) => (
          <div
            key={cat.label}
            className="relative rounded-lg overflow-hidden shadow-lg group aspect-square"
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <span className="font-[Cinzel] text-white text-base xs:text-lg sm:text-xl md:text-2xl tracking-wide drop-shadow text-center">
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default gyaan