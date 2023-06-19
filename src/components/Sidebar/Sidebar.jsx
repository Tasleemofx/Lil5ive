
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsFillPlayFill } from "react-icons/bs"
import logo from "../../assets/images/logowhite.png"
import "./sidebar.css"

const Sidebar = () => {
  return (
    <nav className="sdbar">
      <img src={logo} alt="logo" className="sb-lg"/>
        
        <ul className="pglist">
            <li>ARTISTS</li>
            <li>SERVICES</li>
            <li>DISCOGRAPHY</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>

        <ul className="iconlist">
            <li><AiOutlineTwitter/></li>
            <li><FaFacebookF /></li>
            <li><AiOutlineInstagram/> </li>
            <li><BsFillPlayFill className="playn-btn"/></li>
        </ul>        
        
    </nav>
  )
}

export default Sidebar