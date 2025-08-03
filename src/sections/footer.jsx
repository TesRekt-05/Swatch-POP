import React from 'react'

const footer = () => {
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-8'>
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </h1>
        <div className=" text-2xl flex ml-50 justify-left grid space-x-4 mb-8 mt-50">
            <h1 className='text-4xl mb-2.5 '>SOCIALS</h1>
            <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            <a href="#" className="text-blue-500 hover:underline">Twitter</a>
            <a href="#" className="text-blue-500 hover:underline">Instagram</a>
            <a href="#" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>

        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2023 SwatchPoP. All rights reserved.</p>
            </div>
        </footer>
    </div>
  )
}

export default footer