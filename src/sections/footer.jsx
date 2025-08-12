import React from "react";

const Footer = () => {
  return (
    <>
      <section className=" py-16 flex justify-center items-center w-full">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-black text-xl md:text-2xl font-semibold leading-relaxed">
            lorem ipsum lorem ipsum lorem<br />
            lorem ipsum lorem
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className=" py-14 flex justify-center items-center w-full">
        <div className="w-full max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-start gap-16 md:gap-28">
          {/* Column 1 */}
          <div className="flex flex-col items-center md:items-start w-full">
            <ul className="text-gray-400 text-base font-light space-y-2">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Sign up</li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start w-full">
            <ul className="text-gray-400 text-base font-light space-y-2">
              <li>Term of use</li>
              <li>Privacy policy</li>
              <li>Legal Notice</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
