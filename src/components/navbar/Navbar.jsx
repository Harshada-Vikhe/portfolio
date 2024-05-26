import React, { useRef } from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const menuRef = useRef();

  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }

  return (
<>
    <div className='navbar'>
        <span class="logo"><a href='#'>HV</a></span>
        <IoIosMenu size={35} onClick={openMenu} className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
           <IoMdClose size={30} onClick={closeMenu} className='nav-mob-close'/>
            <li><a href='#'>Home</a></li>
           
            <li><a href='#project'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        
       
    </div>
    
    </>
  )
}

export default Navbar
