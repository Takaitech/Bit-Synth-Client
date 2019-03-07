import React from "react"
import "./keyboard.css"
const AudioKeys =  require('audiokeys');
const Tone = require('tone');



var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
synth.set({
  "oscillator"  : {
    "type"  : "pulse"
  },
  "envelope"  : {
    "attack"  : 0.1,
    "decay"  : 0.3 ,
    "sustain"  : 0.7 ,
    "release"  : 0.4
  }
})

synth.volume.value = -20;

// create a keyboard
var keyboard = new AudioKeys({
  polyphony: 50,
  rows: 1,
  priority: "last",
  rootNote: 60
});




keyboard.down( function(note) {
  let triggered = [document.getElementById(note.keyCode)];
  triggered.forEach(function(keyCode) {
    if (keyCode.className.match(/\bwhite\b/)){
    keyCode.style.top = "2px";
    keyCode.style.backgroundColor ="black"
    } else {
    keyCode.style.top = "2px";
    keyCode.style.backgroundColor ="white"
    }
  })
  let frequency = note.frequency
  //let velocity = note.velocity / 127
  console.log(triggered);
  console.log('trigger down')
  synth.triggerAttack(frequency);
});



keyboard.up( function(note) {
  let triggered = [document.getElementById(note.keyCode)];
  triggered.forEach(function(keyCode) {
    if (keyCode.className.match(/\bwhite\b/)){
    keyCode.style.top = "0px";
    keyCode.style.backgroundColor ="white"
    } else {
    keyCode.style.top = "0px";
    keyCode.style.backgroundColor ="black"
    }
  })
  console.log('trigger up')
  synth.triggerRelease(note.frequency);
});


export default function Keyboard(props) {
  return(
    <div className="keyboard">
        <div className="key white" id="65" style={{left:"6%"}}></div>
        <div className="key black" id="87" style={{left:"11.2%"}}></div>
        <div className="key white leftBorder" id="83" style={{left:"14%"}}></div>
        <div className="key black" id="69" style={{left:"19.3%"}}></div>
        <div className="key white leftBorder" id="68" style={{left:"22%"}}></div>
        <div className="key white leftBorder" id="70" style={{left:"30%"}}></div>
        <div className="key black" id="84" style={{left:"35.2%"}}></div>
        <div className="key white leftBorder" id="71" style={{left:"38%"}}></div>
        <div className="key black" id="89" style={{left:"43.4%"}}></div>
        <div className="key white leftBorder" id="72" style={{left:"46%"}}></div>
        <div className="key black" id="85" style={{left:"51.3%"}}></div>
        <div className="key white leftBorder" id="74" style={{left:"54%"}}></div>
        <div className="key white leftBorder" id="75" style={{left:"62%"}}></div>
        <div className="key black" id="79" style={{left:"67.1%"}}></div>
        <div className="key white leftBorder" id="76" style={{left:"70%"}}></div>
        <div className="key black" id="80" style={{left:"75.5%"}}></div>
        <div className="key white leftBorder" id="186" style={{left:"78%"}}></div>
        <div className="key white leftBorder" id="222" style={{right:"6%"}}></div>
      </div>
  )
}
