import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-14 flex justify-center items-center w-full">
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-start gap-16 md:gap-28">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="text-[1.6rem] md:text-2xl font-serif font-semibold tracking-widest text-black mb-6 uppercase text-center md:text-left">
              LOREM IPSUM
            </h2>
            <ul className="text-gray-400 text-base font-light space-y-2">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="text-[1.6rem] md:text-2xl font-serif font-semibold tracking-widest text-black mb-6 uppercase text-center md:text-left">
              LOREM IPSUM
            </h2>
            <ul className="text-gray-400 text-base font-light space-y-2">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="bg-gray-800 text-white py-4 w-full">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 SwatchPoP. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

