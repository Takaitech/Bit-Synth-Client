import React from 'react';
import {connect} from 'react-redux'
import {initSynth} from '../actions/index'
import {fetchPresets} from '../actions/index'
import {savePreset} from '../actions/index'
import './drop-menu.css'

//Init Synth


export class DropMenu extends React.Component {
  initSynth(e) {
    this.props.dispatch(initSynth(e))
  }

  showForm() {
    let x  = document.getElementsByClassName('presetForm')
    x[0].style.display = 'inline-block';
  }

  handleSubmit(e) {
    e.preventDefault()
    let title = document.getElementById('title').value.toUpperCase()

    let preset ={
    'title': title,
    'envelope': {
      'attack': this.props.synth.envelope.attack,
      'decay': this.props.synth.envelope.decay,
      'sustain': this.props.synth.envelope.sustain,
      'release': this.props.synth.envelope.release
    },
    'portamento': this.props.synth.portamento,
    'volume': this.props.synth.volume,
    'oscillator': {
      'type': this.props.synth.oscillator.type,
      'volume': this.props.synth.oscillator.volume,
      'width': this.props.synth.oscillator.width
    }
  }
  this.props.dispatch(savePreset(preset))
  document.getElementById('title').value = ''
  }

  componentDidMount() {
     this.props.dispatch(fetchPresets());
   }

  render() {
    return(
      <div className='dropdown'>
        <button type='button' className='dropbtn'>
          <img className='icon' src={process.env.PUBLIC_URL + '/files/icons/open-icon.png'} alt='nav list' ></img>
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <input className='button1' type='button' value='INIT SYNTH' onClick={e => {this.initSynth(e)}} />
            <form className="presetForm" onSubmit={e => {this.handleSubmit(e)}}>
              <input id='title' placeHolder='Preset Name' type='text' maxLength='10' autocComplete='off'></input>
              <button className='button2' type='submit' value='SAVE PRESET'>SAVE PRESET</button>
            </form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  synth: state.synth
});

export default connect(mapStateToProps)(DropMenu);
