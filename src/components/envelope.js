import React from "react";
import {updateAttack,updateDecay,updateSustain,updateRelease} from "../actions"
import {connect} from 'react-redux';

import "./envelope.css"

export class Envelope extends React.Component {
  updateAttack(attack) {
    this.props.dispatch(updateAttack(attack));
  }
  updateDecay(decay) {
    this.props.dispatch(updateDecay(decay));
  }
  updateSustain(sustain) {
    this.props.dispatch(updateSustain(sustain));
  }
  updateRelease(release) {
    this.props.dispatch(updateRelease(release));
  }
  render () {
    console.log(this.props)
    return(
    <div className="envelope">
      <label className="attack">A</label>
      <input className="input-range" type="range" step="0.1" min="0" max="5" defaultValue={this.props.envelope.attack} onInput={e => {this.updateAttack(parseFloat(e.target.value))}} />
      <label className="decay">D</label>
      <input className="input-range" type="range" step="0.5" min="0" max="10" defaultValue={this.props.envelope.decay} onInput={e => {this.updateDecay(parseFloat(e.target.value))}} />
      <label className="sustain">S</label>
      <input className="input-range" type="range" step="0.1" min="0" max="1" defaultValue={this.props.envelope.sustain} onInput={e => {this.updateSustain(parseFloat(e.target.value))}} />
      <label className="release">R</label>
      <input className="input-range" type="range" step="0.1" min="0.1" max="10" defaultValue={this.props.envelope.release} onInput={e => {this.updateRelease(parseFloat(e.target.value))}} />
    </div>
    )
  }

}

Envelope.defaultProps = {
  envelope: {
    attack: 0,
    decay: 0.5,
    sustain:1,
    release: 3
  }
};

const mapStateToProps = state => ({
  envelope: state.envelope
});

export default connect(mapStateToProps)(Envelope);