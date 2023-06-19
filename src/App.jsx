import { useState, useRef, useEffect } from 'react'
import './App.css'
import Nav from './components/Navbar/Nav'
import Sidebar from './components/Sidebar/Sidebar'
import Iconbar from './components/Iconbar/Iconbar'
import lil5ive from "./assets/images/5ive.png"
import lil5ivesm from "./assets/images/5ive-sm.png"
import playwhite from "./assets/images/playwhite.png"
import playgrey from "./assets/images/playgrey.png"
import pause from "./assets/images/pause.jpg"
import say from "./assets/music/saybelieve.mp3"
import amoeba from './assets/images/amoeba.png'
import lil5text from "./assets/images/htxt.png"
import ellipse from "./assets/images/Ellipse.png"
import ellipse2 from "./assets/images/Ellipse-4.png"
import happy from "./assets/images/Happy.png"
import "./App.css"



function App() {
  const [opensidebar, setOpensidebar] = useState(false)
  const [isplaying, setIsplaying] = useState(false)
  const [progress, setProgress] = useState(1)
  const [song, setSong] = useState(say)


  const songRef = useRef()
  const controlRef = useRef()


 function handleseek(){
  // let clickarea = 
 }
  function getMusic(){
    let duration = songRef.current.duration
    let ct = songRef.current.currentTime
    
   
    setProgress( (ct/duration) * 100)
    
  }
  function playPause(){
    
    if(!isplaying){
      songRef.current.play()
    }else{
      songRef.current.pause()
    }
    setIsplaying(!isplaying)
  }
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

      <img src={ellipse} alt="semi-circle" className="btm-circ"/>
      <img src={lil5text} alt="bgtxt" className="wmarktxt"/>
      <img src={ellipse2} alt="semi-circle" className="btm-rgt"/>
      <img src={amoeba} alt="amoeba" className="amoeba" />

      <div className="txtm">
        <p className="gianttx">NEW SINGLE</p>
        <p className="smtx">OUT NOW ON ALL PLATFORMS</p>
        <img src={happy} alt="happy" className="happytx"/>
      </div>
      <audio src={song} type="audio/mp3" ref={songRef} onTimeUpdate={getMusic}>
        Your browser cannot play this audio
      </audio>
      <div className="player">
        <div className="playerbtn" onClick={playPause}>
        {isplaying ? <img src={pause} alt="pause"/>: <img src={playwhite} alt="play"/> }
        </div>
        <div className="audioprog" >
          <div onClick={handleseek} className="lenseek"></div>
          <div style={{left: `${progress}%`}} className="seeker"></div>
        </div>
      </div>

     
    </div>
  )
}

export default App
