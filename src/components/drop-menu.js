import React from 'react';
import "./drop-menu.css"
import {synth} from "../reducers/index"

//Init Synth
function initSynth() {
synth.set({
  envelope: {
    attack: 1,
    decay: 0.5,
    sustain:1,
    release: 0.6
  },
  oscillator: {
    type: "pulse",
    width: 0.5
  },
  volume: -10
})
console.log(synth.get())
}

export default function DropMenu(props) {
  return(
    <div className="dropdown">
      <button type="button" className="dropbtn">
        <img className="icon" src={process.env.PUBLIC_URL + '/files/icons/open-icon.png'} alt="nav list" ></img>
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <input type="button" value='INIT' onClick={e => {initSynth()}} />
        <input type="button" value='INIT'/>
        <input type="button" value='INIT'/>
      </div>
    </div>
  )
}
