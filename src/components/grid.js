import React from 'react';
import Tone from 'tone'
import {synth} from "../reducers/index";
import StartAudioContext from "startaudiocontext"
import {connect} from 'react-redux';
import {keyboard} from './keyboard'
import "./grid.css"


//AUDIO CONTEXT TIME
/*--------------------------------------------------------------------*/
StartAudioContext(Tone.context)
.then(() => console.log('INITIALIZED WEB AUDIO API'))
.catch(() => console.log('FAILED TO INITIALIZE WEB AUDIO API'));

function updateTime() {
  requestAnimationFrame(updateTime)
  console.log(Tone.Transport.seconds.toFixed(2))
  //the AudioContext time
  Tone.context.currentTime.toFixed(2)
}
updateTime()

Tone.Transport.bpm.value = 120
Tone.Transport.loopEnd = '4m'
Tone.Transport.loop = true

export class Grid extends React.Component {

  render() {
    let column = document.getElementById('1' )
    console.log(column)

   var loop = new Tone.Sequence(function(time, col){
    			//set the columne on the correct draw frame
    			Tone.Draw.schedule(function(){
    			}, time);
    		}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "4n").start(0);


      const createCells = this.props.notes.map((row, index) => (
        <div className={`cell ` + this.props.noteNumbers[index]} id={this.props.noteNumbers[index]} key={index} ></div>
      ))

      //MAP COLUMN CELLS TO EACH ROW
      const createColumns = this.props.columns.map((column, index) => (
        <div className={`column ` + this.props.columns[index]} id={this.props.columns[index]} key={index} >{createCells}</div>
      ))

      const createGrid = this.props.notes.map((note, index) => (
          <div className="row labels"  id={note[index]} key={this.props.noteNumbers[index]}><span>{this.props.notes[index]}</span></div>

      ));


    keyboard.down(function(note) {
      if (note.note < 96 && note.note > 23) {
      let active = document.getElementById(note.note);
      if(active.className.match(/\bcell\b/)) {
      active.style.backgroundColor ="black";
      }
      }
    });

    keyboard.up(function(note) {
      if (note.note < 96 && note.note > 23) {
      let active = document.getElementById(note.note);
      if(active.className.match(/\bcell\b/)) {
      active.style.backgroundColor ="grey";
      }
    }
    });
    return(
      <div className="grid">
        <div className="octaves">{createGrid}</div>
        {createColumns}
      </div>
    )
  }
}

Grid.defaultProps = {
  mode: "creation",
  currentColumn: -1
};

const mapStateToProps = state => ({
  mode: state.sequencer.mode,
  currentColumn: state.sequencer.currentColumn,
  notes: state.sequencer.grid.notes,
  noteNumbers: state.sequencer.grid.noteNumbers,
  columns: state.sequencer.grid.columns


});

export default connect(mapStateToProps)(Grid);
