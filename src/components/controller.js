import React from 'react';
import Tone from 'tone'
import {connect} from 'react-redux'
import Keyboard from './keyboard'
import Envelope from './envelope'
import Volume from './volume'
import Effects from './effects'
import {playMode,updateCurrentColumn } from '../actions'
import './controller.css';


export class Controller extends React.Component {
  playMode(mode) {
    this.props.dispatch(updateCurrentColumn(0))

    if (this.props.mode === 'creation') {
    this.props.dispatch(playMode(mode))
    Tone.Transport.toggle()
    } else if (this.props.mode === 'play') {
    this.props.dispatch(playMode('creation'))
    Tone.Transport.toggle()
    }
  }
  
  render(){
    return (
      <div className='controller'>
        <h2 className='envelope-title'>ENVELOPE</h2>
        <Envelope />
        <Effects />
        <Keyboard />
        <Volume />
        <input className='play' id='play' type='image' src='/files/icons/play.png' value='Play'  alt='play' onClick={e => {this.playMode('play')}} />
      </div>
    )
  }
}


Controller.defaultProps = {
  mode: 'creation'
};

const mapStateToProps = state => ({
  mode: state.sequencer.mode
});

export default connect(mapStateToProps)(Controller);
