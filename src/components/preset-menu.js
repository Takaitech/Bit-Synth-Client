import React from 'react';
import './preset-menu.css'
import {loadPreset} from "../actions/index"
import {connect} from 'react-redux'

export class PresetMenu extends React.Component {
  loadPreset(preset) {
    this.props.dispatch(loadPreset(preset))
  }

  render(){
  console.log(this.props.presets[0])
    const listPresets = this.props.presets.map((preset, index) => (

        <li className='preset' value={index} key={index} onClick={preset => this.loadPreset(this.props.presets[index])}>{this.props.presets[index].title}</li>
      ));
    return (
      <div className="preset-menu">
        <ul>
          {listPresets}
        </ul>
      </div>
    )
  }
}



PresetMenu.defaultProps = {
  presets: []
};

const mapStateToProps = state => ({
  synth: state.synth,
  presets: state.presets
});

export default connect(mapStateToProps)(PresetMenu);
