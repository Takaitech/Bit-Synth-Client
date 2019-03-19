import React from 'react'
import {connect} from 'react-redux'
import {updateWidth} from '../actions'
import './effects.css'


export class Effects extends React.Component {

updateWidth(width){
  this.props.dispatch(updateWidth(width))
}

render(){
  return(
    <div className='effects-container'>
      <select value={this.props.oscillator.width} onChange={e=> {this.updateWidth(parseFloat(e.target.value))}}>
        <option value='0.1'>0.1</option>
        <option value='0.2'>0.2</option>
        <option value='0.3'>0.3</option>
        <option value='0.4'>0.4</option>
        <option value='0.5'>0.5</option>
        <option value='0.6'>0.6</option>
        <option value='0.7'>0.7</option>
        <option value='0.8'>0.8</option>
        <option value='0.9'>0.9</option>
        <option value='1'>1</option>
      </select>
      <br />
      <span className="pulse-width">PULSE WIDTH</span>
    </div>
  )
}
}

const mapStateToProps = state => ({
  oscillator: state.synth.oscillator
})

export default connect(mapStateToProps)(Effects)
