import React from "react"
import Hero from "./sections/Hero"
import wavenav from "./assets/images/wavenav.png"

function App() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Wave image at the top */}
      <img
        src={wavenav}
        alt="wave"
        className="w-full h-auto absolute top-0 left-0 z-10"
        style={{ objectFit: "cover" }}
      />
      {/* Main content */}
      <div className="relative z-20">
        <Hero />
      </div>
    </div>
  )
}

export default App
