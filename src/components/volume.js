import React from "react";
import {connect} from 'react-redux';
import {updateVolume,muteVolume} from '../actions'
import "./volume.css"

export class Volume extends React.Component {

  updateVolume(volume) {
    this.props.dispatch(updateVolume(volume));
  }
  muteVolume() {
    if(this.props.oscillator.mute === false){
      this.props.dispatch(muteVolume(true));
    } else if (this.props.oscillator.mute === true) {
    this.props.dispatch(muteVolume(false));
    }
  }
  checkMuteState() {
    if(this.props.oscillator.mute === false) {
      return process.env.PUBLIC_URL + '/files/icons/volume-off.png'
    } else {
      return process.env.PUBLIC_URL + '/files/icons/volume-2.png'
    }
  }

  render() {

  return(
    <div className="volume-controls">
      <input type="image" className="mute" src={this.checkMuteState()} onClick={e => {this.muteVolume()}} alt="mute" />
      <input className="input-range" type="range" min="-50" max="10" orient="vertical"  defaultValue={this.props.volume} onInput={e => {this.updateVolume(parseFloat(e.target.value))}} />
    </div>
  )
  }
}


Volume.defaultProps = {
    mute: false,
    volume: -10
};

const mapStateToProps = state => ({
  oscillator: {
    mute: state.synth.oscillator.mute
  },
  volume: state.synth.volume

});

export default connect(mapStateToProps)(Volume);
