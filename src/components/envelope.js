import React from 'react';
import {updateAttack,updateDecay,updateSustain,updateRelease} from '../actions'
import {connect} from 'react-redux';
import './envelope.css'

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

    return(
    <div className='envelope'>
      <label className='attack'>A</label>
      <input className='input-range' type='range' step='0.1' min='0' max='5' value={this.props.envelope.attack} onChange={e => {this.updateAttack(parseFloat(e.target.value))}} />
      <label className='decay'>D</label>
      <input className='input-range' type='range' step='0.5' min='0' max='5' value={this.props.envelope.decay} onChange={e => {this.updateDecay(parseFloat(e.target.value))}} />
      <label className='sustain'>S</label>
      <input className='input-range' type='range' step='0.1' min='.1' max='1' value={this.props.envelope.sustain} onChange={e => {this.updateSustain(parseFloat(e.target.value))}} />
      <label className='release'>R</label>
      <input className='input-range' type='range' step='0.1' min='0.1' max='5' value={this.props.envelope.release} onChange={e => {this.updateRelease(parseFloat(e.target.value))}} />
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
  envelope: state.synth.envelope
});

export default connect(mapStateToProps)(Envelope);
