import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { GiClick } from 'react-icons/gi';
import { AiFillHome } from 'react-icons/ai';
import { FaChurch, FaDonate, FaBible } from 'react-icons/fa';
import Logo from '../static/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <div className='lg:flex lg:flex-row lg:items-center lg:scale-100'>
     <ul className=" text-xs  space-y-3 lg:flex lg:flex-row lg:space-x-12   lg:space-y-0.5 lg:mx-6 xl:-mx-44">
       <div className='flex flex-row items-center space-x-1 '>
         <AiFillHome className='fill-current text-primary2 lg:text-accent'/>

          <li><Link to="/" className="text-primary2 hover:text-primary2 lg:text-accent lg:hover:text-accent"><p className='font-sans text-xs font-regular '>Home</p></Link></li>
       </div>

       <div className='flex flex-row items-center space-x-1'>
        <GiClick className='fill-current text-primary2 lg:text-accent'/>
          <li><Link to="/about" className="text-primary2 hover:text-primary2 lg:text-accent lg:hover:text-accent"><p className='font-sans text-xs font-regular '>About</p></Link></li>
       </div>

       <div className='flex flex-row  items-center space-x-1'>
        <FaChurch className='fill-current text-primary2 lg:text-accent' />
          <li><Link to="/ministries" className="text-primary2 hover:text-primary2 lg:text-accent lg:hover:text-accent"><p className='font-sans text-xs font-regular '>Ministries</p></Link></li>
       </div>

       <div className='flex flex-row items-center space-x-1'>
        <FaBible className='fill-current text-primary2 lg:text-accent' />
          <li><Link to="/preachings" className="text-primary2  hover:text-primary2 lg:text-accent lg:hover:text-accent"><p className='font-sans text-xs font-regular '>Preachings</p></Link></li>
       </div>        

       <div className='flex flex-row items-center space-x-1'>
        <FaDonate className='fill-current text-primary2 lg:text-accent' />
            <li><Link to="/give" className="text-primary2 hover:text-primary2 lg:text-accent lg:hover:text-accent"><p className='font-sans text-xs font-regular '>Give</p></Link></li>
       </div>

  </ul>
  </div>
  

)






function Navbar() {
  const [ toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="fixed left-0 right-0 top-0 h-12 shadow-md  bg-gradient-to-r from-gradientColor1 to-gradientColor2">

      <nav className="flex flex-row items-center container  h-full justify-between relative">
       
       
        <div className="flex flex-row items-center justify-between container ">
              <div className='flex flex-row items-center'>
                  <img src={Logo} alt="dck" className='h-6 '/>
                  <h1 className="font-regular   text-xs  text-accent  md:scale-110">Deliverance Church Kayole</h1>
              </div>
        
              <div className='hidden sm:hidden lg:flex lg:items-center'>
                  <Menu />
              </div>

        </div>

        <div className=' mx-5  
        lg:hidden'>
               {toggleMenu
                 ?<RiCloseLine className='fill-current text-accent ' onClick={() => setToggleMenu(false)} />

                 :<AiOutlineMenu className='fill-current text-accent ' onClick={() => setToggleMenu(true)}/>
               }
          
               {toggleMenu && (
                 <div className='absolute right-2 top-16 sm:top-20 sm:right-4'>
                  <div className=' text-primary2 scale-up-center '>
                  <Menu/>

                  </div>
                    
                     
                      
                   
                 </div>
                )}

        </div>
    

       
       
      </nav>
      
    </div>
  );
}

export default Navbar;
