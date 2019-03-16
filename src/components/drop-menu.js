import React from 'react';
import "./drop-menu.css"
import {synth} from "../reducers/index"
import {connect} from "react-redux"
import {API_BASE_URL} from '../config'
//Init Synth
function initSynth() {
synth.set({
  envelope: {
    attack: 1,
    decay: 0.5,
    sustain:1,
    release: 0.6
  },
  oscillator: {
    type: "pulse",
    width: 0.5
  },
  volume: -10
})
console.log(synth.get())
}

export class DropMenu extends React.Component {
  render() {
    console.log(this.props)

    return(
      <div className="dropdown">
        <button type="button" className="dropbtn">
          <img className="icon" src={process.env.PUBLIC_URL + '/files/icons/open-icon.png'} alt="nav list" ></img>
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <input type="button" value='INIT SYNTH' onClick={e => {initSynth()}} />
          <input type="button" value='SAVE PRESET'/>
        </div>
      </div>
    )
  }
}



DropMenu.defaultProps = {
};

const mapStateToProps = state => ({
  synth: state.synth
});

export default connect(mapStateToProps)(DropMenu);
