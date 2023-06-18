import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import Iconbar from './components/Iconbar/Iconbar'
import lil5ive from "./assets/images/5ive.png"
import lil5ivesm from "./assets/images/5ive-sm.png"
import playwhite from "./assets/images/playwhite.png"
import playgrey from "./assets/images/playgrey.png"
import say from "./assets/music/saybelieve.mp3"
import amoeba from './assets/images/amoeba.png'
import lil5text from "./assets/images/htxt.png"
import ellipse from "./assets/images/Ellipse.png"
import ellipse2 from "./assets/images/Ellipse-4.png"
import "./App.css"

function App() {
  const [opensidebar, setOpensidebar] = useState(false)

  return (
    <div className="hpage-black">
      <Nav setOpensidebar={setOpensidebar} opensidebar={opensidebar}/>
      {opensidebar && <Sidebar />}
      {!opensidebar && <Iconbar />}

      <picture>
        <source media="(max-width: 768px)" srcSet={lil5ivesm} />
        <img src={lil5ive} alt="beatmaker" className="mainimg"/>
      </picture>

      <div className="playbtns">
        <img src={playwhite} alt="playwhite" className="pgw"/>
        <img src={playgrey} alt="playgrey" className="pgr"/>
      </div>

      <img src={ellipse} alt="semi-circle" />
      <img src={lil5text} alt="bgtxt" className="wmarktxt"/>
      <img src={ellipse2} alt="semi-circle" />
      <img src={amoeba} alt="amoeba" />
      <audio controls>
        <source src={say} type="audio/mp3" />
        Your browser cannot play this audio
      </audio>
    </div>
  )
}

export default App
