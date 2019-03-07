import React from "react";
import {connect} from 'react-redux';
import "./controller.css";
import Keyboard from "./keyboard"
import Envelope from "./envelope"
import Volume from "./volume"


export function Controller(props) {
let envelopeState = {
  attack: props.attack,
  decay: props.decay,
  sustain: props.sustain,
  release: props.release
}

  return (
    <div className="controller">
    <Envelope envelope={envelopeState} />
    <Keyboard />
    <Volume />
    </div>
  )
}


Controller.defaultProps = {
  attack: 0.5,
  decay:  0.5,
  sustain: 0.8,
  release: 0.3


};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Controller);
