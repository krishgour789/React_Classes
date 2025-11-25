import React from "react";
import './Tailwind.css'

const App = () => {
    return (
        <>
        <nav className="p-4 border-b">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold">App</h1>
       
        <ul className="flex gap-3.5">
            <li>Home</li>
            <li>Contact</li>
            <li>Help</li>
        </ul>
      </div>
    </nav>
        </>
    )
}

export default App