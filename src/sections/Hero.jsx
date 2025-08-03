import React, { useState } from 'react'
"use client";
import { TypewriterEffect } from "../components/ui/typewriter-effect.jsx";
import headerLogo from "../assets/images/headerLogo.png"
import bgImg from "../assets/images/bg.png"
import hero from "../assets/images/hero.png"
import About from "../sections/About.jsx"
import Pallete from "../sections/colorPallete.jsx"
import Gyaan from "../sections/gyaan.jsx"
import Footer from "../sections/footer.jsx";


export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Welcome",
      className: "text-black-500 dark:text-black-500 "
      ,
    },
    {
      text: "To",
      className: "text-black-500 dark:text-black-500",
    },
    {
      text: " SwatchPoP",
      className: "text-black-200 dark:text-black-500",
    },
  ];
  return (
    <div className="flex flex-col  items-center justify-center h-[60rem] font-cormorant text-4xl md:text-6xl font-bold text-black-500 dark:text-black-500 ">
      <TypewriterEffect words={words} />
      {/*Hero image*/}
      <img
        src={hero}
        alt="hero"
        className=" w-[600px] h-[500px] object-contain"
      />
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          className="w-40 h-10 rounded-3xl bg-transparent border dark:border-black border-transparent text-black text-sm">
          BROWSE PALETTES
        </button>
        <button
          className="w-40 h-10 rounded-3xl bg-white text-black border border-black  text-sm">
          CREATE YOUR OWN
        </button>
      </div>
    </div>
  );
}


const navItems = [
 { name: "HOME", href: "#", isActive: true },
  { name: "ABOUT US", href: "#about" },
  { name: "PALETTES", href: "#palettes" },
  { name: "CONTACT US", href: "#footer" },
];


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative mr-5 ml-5 min-h-screen w-auto rounded-2xl overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 1.0,
        }}
      />
      {/* Content */}
      <div className="relative z-10">
        <header className='bg-transparent pl-5 pr-5 padding-x py-8 absolute z-10 w-full '>
          <nav className='flex justify-between items-center max-container'>
            <header className="rounded-4xl w-full">
              <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
                {/* Logo */}
                <a href='/'>
                  <img
                    src={headerLogo}
                    alt='logo'
                    width={129}
                    height={29}
                    className='rounded-2xl m-0 w-[129px] h-[29px]'
                  />
                </a>
                {/* Hamburger for mobile */}
                <button
                  className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle menu"
                >
                  <span className={`block h-0.5 w-6 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-[Cinzel] text-black
                        ${item.isActive ? "p-1 bg-[#92A88BA3] rounded-full shadow" : ""}
                      `}
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
                {/* Auth Buttons */}
                <div className="hidden md:flex space-x-4">
                  <button
                    className="rounded-3xl text-lg font-[Cinzel] text-black bg-white border-none p-1.5"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    SIGN UP
                  </button>
                  <button
                    className="rounded-3xl text-lg font-[Cinzel] text-black bg-white p-1.5"
                    style={{ fontFamily: "Cinzel, serif" }}
                  >
                    LOG IN
                  </button>
                </div>
              </div>
              {/* Mobile menu */}
              {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-4 space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-[Cinzel] text-black
                        ${item.isActive ? "p-1 bg-[#92A88BA3] rounded-full shadow" : ""}
                      `}
                      style={{ fontFamily: "Cinzel, serif" }}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-col space-y-2 w-full items-center">
                    <button
                      className="rounded-3xl text-lg font-[Cinzel] text-black bg-white border-none p-1.5 w-4/5"
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      SIGN UP
                    </button>
                    <button
                      className="rounded-3xl text-lg font-[Cinzel] text-black bg-white p-1.5 w-4/5"
                      style={{ fontFamily: "Cinzel, serif" }}
                    >
                      LOG IN
                    </button>
                  </div>
                </div>
              )}
            </header>
          </nav>
        </header>
        <TypewriterEffectDemo />
        <div id="about">
          <About />
        </div>
        <div id="palettes">
          <Pallete />
        </div>
        <div id="gyaan">
          <Gyaan />
        </div>
        <div id="footer">
        <Footer />
        </div>

      </div>
    </div>
  );
}

export default Header