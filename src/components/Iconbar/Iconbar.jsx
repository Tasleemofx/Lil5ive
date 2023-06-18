import React from 'react'
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsFillPlayFill } from "react-icons/bs"
import "./icbar.css"

const Iconbar = () => {
  return (
    <div className="ic-bar">
        
             <ul>
            <li><AiOutlineTwitter/></li>
            <li><FaFacebookF /></li>
            <li><AiOutlineInstagram/> </li>
            <li><BsFillPlayFill style={{color: "#FF0000"}}/></li>
        
        </ul>
    </div>
  )
}

export default Iconbar