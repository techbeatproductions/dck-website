import React from "react";
import {Link} from 'react-router-dom';

function Button({text, bg, padding}) {
  return (
    <div>
      <button
        className={`
          ${padding || 'px-6 py-2'} text-sm font-semibold uppercase 
          rounded-sm text-white transition ${bg}`}
      >
        <span>{text}</span>
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-primary2">
      <nav className="flex items-center container mx-auto h-full justify-between">
        <h1 className="font-semibold uppercase text-lg text-accent">
          🔄 Deliverance Church Kayole
        </h1>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/" className="text-accent hover:text-accent">Home</Link></li>
            <li><Link to="/about" className="text-accent hover:text-accent">About Us</Link></li>
            
            <li><Link to="/ministries" className="text-accent hover:text-accent">Ministries</Link></li>
            <li><Link to="/preachings" className="text-accent hover:text-accent">Preachings</Link></li>
            <li><Link to="/give" className="text-accent hover:text-accent">Give</Link></li>
          </ul>
        </div>
       
      </nav>
    </div>
  );
}

export default Navbar;
