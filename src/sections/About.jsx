import React from 'react'

const About = () => {
  return (
    <div id="about" className="flex items-center justify-center min-h-[80vh]">
      {/* Content */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center md:items-start justify-between px-4 md:px-6 py-8 md:py-12 mt-5">
        {/* About Us Title */}
        <h1
          className="text-4xl md:text-6xl font-bold font-[Comfortaa] text-black drop-shadow-lg mb-4 md:mb-0 md:mt-4 text-center md:text-left w-full md:w-auto"
          style={{ letterSpacing: '2px' }}
        >
          ABOUT US
        </h1>
        {/* Paragraph */}
        <p
          className="text-base sm:text-lg md:text-3xl text-black font-[Montserrat] text-center md:text-right w-full md:max-w-[520px]"
          style={{ letterSpacing: '1px' }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex 
          sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis 
          convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla 
          lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer 
          nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora t
          orquent per conubia nostra inceptos himenaeos.
        </p>
      </div>
    </div>
  )
}

export default About