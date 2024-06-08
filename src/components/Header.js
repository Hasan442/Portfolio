import { Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
export default function Header()
{
  const [toggleMenu,setToggleMenu]= useState(false);

  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleBlur = () => {
    setToggleMenu(false);
  };

    return <header className="flex justify-between px-5 py-2 sticky top-0 z-10 shadow-2xl overflow-x-hidden">
      <a className="font-bold text-black" href="#"><span className='text-black text-3xl font-main-font'>M</span>ohamed Asan A</a>
      <nav className="hidden md:block">
      <ul className="flex text-black py-2">
         <li><a href="#about">About</a></li>
         <li><a href="#experience">Experience</a></li>
         <li><a href="#skills">Skills</a></li>
         <li><a href="#project">Project</a></li>
         <li><a href="#resume">Resume</a></li>
         <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden mobile-nav px-5 py-2 border-2 border-r-2 rounded shadow-2xl">
          <ul className="flex flex-col text-black" onBlur={handleBlur}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}
      <button onClick={()=> setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black h-5'/></button>
    </header>
}