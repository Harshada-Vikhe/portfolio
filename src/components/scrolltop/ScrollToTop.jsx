import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false)

    useEffect(()=>{
        const toggleVisibility=()=>
        window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)

        window.addEventListener('scroll',toggleVisibility)
        return()=>window.removeEventListener('scroll',toggleVisibility)
    },[])

  return isVisible ? (
    <div className='scroll'>
        <a href='#top'><FaArrowUp fontSize={35} className='arrow' /></a>
    </div>
  ) : null;
}

export default ScrollToTop