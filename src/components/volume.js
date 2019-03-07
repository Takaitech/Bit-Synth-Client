import React from "react";
import "./volume.css"

export default function Volume() {
  return(
    <div className="volume-controls">
      <label className="volume"><img src={process.env.PUBLIC_URL + '/files/icons/volume-2.png'} alt="Volume"/></label>
      <input className="input-range" type="range" orient="vertical" />
      <input type ="image" className="mute" src={process.env.PUBLIC_URL + '/files/icons/volume-off.png'} alt="Mute"/>
    </div>
  )
}
