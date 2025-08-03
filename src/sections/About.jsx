import React from 'react'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] ">
      {/* Content */}
      <div className="flex flex-row w-full max-w-5xl items-center justify-between px-6 py-12 mt-5">
        {/* About Us Title */}
        <h1
          className="mt-4 text-6xl font-700-bold font-[Comfortaa] text-black drop-shadow-lg"
          style={{ minWidth: '320px', letterSpacing: '2px' }}
        >
          ABOUT US
        </h1>
        {/* Paragraph */}
        <p className="text-3xl text-black font-[Montserrat] mr-0.5rem text-right " 
        style={{ maxWidth: '520px', letterSpacing: '1px' }}>
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