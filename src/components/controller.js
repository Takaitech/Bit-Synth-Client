import React from "react";
import "./controller.css";
import {playMode,updateCurrentColumn } from '../actions'
import {connect} from 'react-redux'
import Keyboard from "./keyboard"
import Envelope from "./envelope"
import Volume from "./volume"
import Effects from "./effects"

import Tone from 'tone'
console.log(Tone.Transport.seconds.toFixed(2))


export class Controller extends React.Component {
  playMode(mode) {
    console.log('hi')
    this.props.dispatch(updateCurrentColumn(0))
    if (this.props.mode === "creation") {
    this.props.dispatch(playMode(mode))
    console.log(Tone.Transport.seconds.toFixed(2))
    Tone.Transport.toggle()
  } else if (this.props.mode === "play") {
    this.props.dispatch(playMode("creation"))
    console.log(Tone.Transport.seconds.toFixed(2))
    Tone.Transport.toggle()
  }


  }
  render(){
    return (
      <div className="controller">
        <Envelope />
        <Effects />
        <Keyboard />
        <Volume />
        <input id="play" type="button" value="Play" onClick={e => {this.playMode("play")}} />
      </div>
    )
  }
}


Controller.defaultProps = {
  mode: "creation"
};

const mapStateToProps = state => ({
  mode: state.sequencer.mode
});

export default connect(mapStateToProps)(Controller);
