import React from 'react';
import {connect} from 'react-redux'
import {loadPreset} from '../actions/index'
import './preset-menu.css'

export class PresetMenu extends React.Component {
  loadPreset(preset) {
    this.props.dispatch(loadPreset(preset))
  }

  render(){
    const listPresets = this.props.presets.map((preset, index) => (
      <li className='preset' value={index} key={index} onClick={preset => this.loadPreset(this.props.presets[index])}>{this.props.presets[index].title}</li>
    ));

    return (
      <div className='preset-menu'>
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
