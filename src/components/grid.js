import React from 'react';
import Tone from 'tone'
import {synth} from '../reducers/index';
import {updateCurrentColumn} from  '../actions'
import StartAudioContext from 'startaudiocontext'
import {connect} from 'react-redux';
import keyboard from './keyboard'
import './grid.css'

function activateCell(e) {
  if(e.classList[0].toString(0,4) === 'cell') {
    e.className =('active cell')
    e.style.backgroundColor ='rgb(68,200,141)'

  } else if (e.classList[0].toString(0,6) === 'active') {
    e.className =('cell')
    e.style.backgroundColor = 'transparent'
  }
}

StartAudioContext(Tone.context)
.then(() => console.log('INITIALIZED WEB AUDIO API'))
.catch(() => console.log('FAILED TO INITIALIZE WEB AUDIO API'));

function updateTime() {
  requestAnimationFrame(updateTime)
  Tone.Transport.seconds.toFixed(2)
  //the AudioContext time
  Tone.context.currentTime.toFixed(2)
}

updateTime()
Tone.Transport.loopEnd = '4m'
Tone.Transport.loop = true;
Tone.Transport.bpm.value = 140;


export class Grid extends React.Component {
  updateCurrentColumn(col) {
    this.props.dispatch(updateCurrentColumn(col));
  }

  render() {
    const createCells = this.props.notes.map((note, index) => (
      <div className='cell' id={this.props.noteNumbers[index]}  data-value={this.props.notes[index]} key={index} onClick={e => {activateCell(e.target)}} ></div>
    ))

    const createColumns = this.props.columns.map((column, index) => (
      <div className={`column ` + this.props.columns[index]} id={this.props.columns[index]} key={index}>{createCells}</div>
    ))

    const createRows = this.props.notes.map((note, index) => (
      <div className='row'  id={note[index]} key={this.props.noteNumbers[index]}><span>{this.props.notes[index]}</span></div>
    ));

    let index = this.props.currentColumn;

    Tone.Transport.scheduleRepeat(repeat,'16n')


    function repeat(time) {
      let step = index % 16;
      let currentStep = document.getElementById(step)
    	var siblings = [];
    	var sibling = currentStep.parentNode.firstChild;
    	while (sibling) {
    		if (sibling.nodeType === 1 && sibling !== currentStep) {
    			siblings.push(sibling);
    		}
    		sibling = sibling.nextSibling
    	}

      currentStep.className = 'column highlight'
      for (let i= 0; i < siblings.length; i++) {
        siblings[i].className = 'column'
      }

      const activeNotes  = []

      let currentCells = currentStep.children
      for (let i = 0; i < currentCells.length; i++) {
        if(currentCells[i].classList[0].toString(0,6) === 'active'){
          activeNotes.push(currentCells[i].getAttribute('data-value'))
        }
      }
      
      for(let i = 0; i < activeNotes.length; i++) {
      synth.triggerAttackRelease(activeNotes[i],'16n',time)
      }
      index ++
    }


    keyboard.down(function(note) {
      if (note.note < 96 && note.note > 47) {
        let active = document.getElementById(note.note);
        if(active.className.match(/\bcell\b/)) {
          active.className = `cell active `
        } else {
          console.log('already active')
        }
      }
    });

    keyboard.up(function(note) {
      if (note.note < 96 && note.note > 47) {
        let active = document.getElementById(note.note);
        if(active.className.match(/\bcell active\b/ )) {
          active.className = 'cell'
        } else {
          console.log('already active')
        }
      }
    });
    return(
      <div className='grid'>
        <div className='rows'>{createRows}</div>
        <div className='columns'>{createColumns}</div>
      </div>
    )
  }
}


Grid.defaultProps = {
  mode: 'creation',
  currentColumn: 0,
};

const mapStateToProps = state => ({
  mode: state.sequencer.mode,
  currentColumn: state.sequencer.currentColumn,
  notes: state.sequencer.grid.notes,
  noteNumbers: state.sequencer.grid.noteNumbers,
  columns: state.sequencer.grid.columns,
  active: state.sequencer.grid.active
});

export default connect(mapStateToProps)(Grid);
