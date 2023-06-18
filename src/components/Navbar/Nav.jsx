import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import logo from "../../assets/images/logowhite.png"
import "./nav.css"

const Nav = ({setOpensidebar, opensidebar}) => {

  const [inactive, setInactive] = useState(true)
  return (
    <nav className="navbar-m dflex jsb-aic">
        <img src={logo} alt="logo" />
        <div className="ics">
            { inactive ? <AiOutlineSearch onClick={()=> setInactive(false)}/>: <form>
                <input type="text" className="s-inp" /><AiOutlineSearch />
              </form>}
            <HiOutlineMenuAlt3 onClick={()=> setOpensidebar(!opensidebar)} />
        </div>
    </nav>
  )
}

export default Nav