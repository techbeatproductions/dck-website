import React from 'react';
import {Link} from 'react-router-dom';
import { GiClick } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { FaChurch, FaDonate, FaBible } from 'react-icons/fa';
import Logo from '../static/logo.svg'




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
        <div className='flex flex-row items-center'>
          <img src={Logo} alt="" className='h-8'/>
          <h1 className="font-thin  text-xs text-accent">
           Deliverance Church Kayole
        </h1>
        </div>
        
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <div className='flex flex-row items-center space-x-1'>
              <AiFillHome className='fill-current text-accent'/>

              <li><Link to="/" className="text-accent hover:text-accent"><p className='font-sans text-xs font-thin '>Home</p></Link></li>
            </div>
            
            <div className='flex flex-row items-center space-x-1'>
              <GiClick className='fill-current text-accent'/>
              <li><Link to="/about" className="text-accent hover:text-accent"><p className='font-sans text-xs font-thin'>About Us</p></Link></li>
            </div>
            
            <div className='flex flex-row  items-center space-x-1'>
              <FaChurch className='fill-current text-accent' />
               <li><Link to="/ministries" className="text-accent hover:text-accent"><p className='font-sans text-xs font-thin '>Ministries</p></Link></li>
            </div>

            <div className='flex flex-row items-center space-x-1'>
              <FaBible className='fill-current text-accent' />
              <li><Link to="/preachings" className="text-accent hover:text-accent"><p className='font-sans text-xs font-thin'>Preachings</p></Link></li>
            </div>        

            <div className='flex flex-row items-center space-x-1'>
              <FaDonate className='fill-current text-accent' />
              <li><Link to="/give" className="text-accent hover:text-accent"><p className='font-sans text-xs font-thin'>Give</p></Link></li>
              </div>
            
          </ul>
        </div>
       
      </nav>
    </div>
  );
}

export default Navbar;
