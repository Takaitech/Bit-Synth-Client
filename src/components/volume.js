import React from 'react';
import {connect} from 'react-redux';
import {updateVolume,muteVolume} from '../actions'
import './volume.css'

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
      return process.env.PUBLIC_URL + '/files/icons/volume-on.png'
    }
  }

  render() {
    return(
      <div className='volume-controls'>
        <h2 className='volume-title'>VOLUME</h2>
        <input type='image' className='mute' src={this.checkMuteState()} onClick={e => {this.muteVolume()}} alt='mute' />
        <input className='input-range-volume' type='range' min='-75' max='0' orient='vertical'  value={this.props.volume} onChange={e => {this.updateVolume(parseFloat(e.target.value))}} />
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
