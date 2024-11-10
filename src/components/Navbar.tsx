"use client"

import React from 'react'
import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
import logo from './../public/logo.jpg'

export default function Navbar  () {

 const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
  setIsOpen(!isOpen);
};

// Close the menu when a menu item is clicked
const handleLinkClick = () => {
  setIsOpen(false);
};

return (  

<div id='nav'>

  <div className="relative">
    <button
      onClick={toggleMenu}
      className="flex items-center p-2 text-white rounded-md focus:outline-none md:hidden"
    >
      <i className={`bx bx-menu text-2xl ${isOpen ? "text-red-600" : "text-black"}`}></i>
    </button>
    {isOpen && (
      <nav className="absolute top-12 right- w-48 bg-white shadow-lg z-50 rounded-md">
        <ul className="flex flex-col p-2">
          <li className="py-1 px-4 hover:bg-gray-100">
            <Link href="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="py-1 px-4 hover:bg-gray-100">
            <Link href="/about" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="py-1 px-4 hover:bg-gray-100">
            <Link href="/projects" onClick={handleLinkClick}>Projects</Link>
          </li>
          <li className="py-1 px-4 hover:bg-gray-100">
            <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </nav>
    )}

<header className='hidden md:block'>

              <nav > 

               <b> <ul className=' flex list-none '>
                                    <li >
                       <Link href="/">Home</Link></li>
                     <li>
                       <Link href="/about">About</Link></li>
            
                      <li >
                       <Link href="/projects">Projects</Link></li>
                   <li >
                      <Link href="/contact">Contact</Link></li>
               </ul>     </b>
               
           </nav>
            <hr/>
        </header>
    </div>

 

    </div>
  );
};



