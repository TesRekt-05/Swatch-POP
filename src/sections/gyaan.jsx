import React from 'react'
import moreBalls from "../assets/images/moreBalls.png"
import bra from "../assets/images/bra.png"
import clothes from "../assets/images/clothes.jpeg"
import books from "../assets/images/books.jpg"
import home from "../assets/images/home.jpg"
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
      className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${moreBalls})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Top Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Text */}
        <div className="flex-1 flex flex-col items-center md:items-start px-4">
          <h2 className="font-[Cinzel] text-3xl md:text-4xl text-black text-center md:text-left mb-8 leading-snug">
            Already know what you <br /> want? Let’s match it to <br /> your vibe.
            <br /><br />
            Pick your item, we’ll <br /> bring the aesthetic!
          </h2>
        </div>
        {/* Bra Image */}
        <div className="flex-1 flex justify-center md:justify-end px-4 mt-8 md:mt-0">
          <img
            src={bra}
            alt="Bra"
            className="rounded-full object-cover w-[320px] h-[320px] shadow-lg"
            style={{ background: "transparent" }}
          />
        </div>
      </div>
      {/* Category Boxes */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 px-4">
        {categories.map((cat, idx) => (
          <div
            key={cat.label}
            className="relative rounded-lg overflow-hidden shadow-lg group"
            style={{ aspectRatio: "1/1" }}
          >
            <img
              src={cat.img}
              alt={cat.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0  flex items-center justify-center">
              <span className="font-[Cinzel] text-black text-2xl md:text-2xl tracking-wide drop-shadow text-center">
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