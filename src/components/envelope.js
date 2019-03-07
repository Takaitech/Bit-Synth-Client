import React from "react";
import "./envelope.css"


export default function Envelope(props) {
  console.log(props.envelope.attack)
  return (
    <div className="envelope">
      <label className="attack">A</label>
      <input className="input-range" min="0" max="10" type="range" orient="vertical" />
      <label className="decay">D</label>
      <input className="input-range" min="0" max="10" type="range" orient="vertical" />
      <label className="sustain">S</label>
      <input className="input-range" min="0" max="10" type="range" orient="vertical" />
      <label className="release">R</label>
      <input className="input-range" min="0" max="10" type="range" orient="vertical" />
    </div>
  )
}
