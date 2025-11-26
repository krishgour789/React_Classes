import React from "react";
import './Tailwind.css'
import { FaHome } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";


const App = () => {
    return (
        <>
        <nav className="p-4 border-b items-center">
      <div className="flex justify-between items-center ">
        <img src="vite.svg" alt="" />
       

        <ul className="hidden sm:flex items-center gap-5 ">
            <li className="flex items-center"><FaHome />  Home</li>
            <li className="flex items-center"><IoIosContact /> Contact</li>
            <li className="flex items-center"><FaHandsHelping /> Help</li>
        </ul>
        {/* // Media Query
        0-640 px = By Default
        640-768 px = SM:
        768-1024 px = MD:
        1024+ = Lg: */}
      </div>
    </nav>
    <div className="text-amber-700 text-3xl">
      <h1 className="text-cyan-800">Lorem, ipsum dolor.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nobis architecto odit tempore hic modi eaque deleniti quae itaque aspernatur.</p>
    </div>
        </>
    )
}

export default App