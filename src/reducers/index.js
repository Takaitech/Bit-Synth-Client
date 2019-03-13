import * as actions from "../actions";
import Tone from 'tone';
import keyboard from "../components/keyboard"

//INIT SYNTH
var synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
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

export {synth};



let rootNotes = ['B','A#','A','G#','G','F','F#','E','D#','D','C#','C'];
let columns = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"];
let notes = [];
let noteNumbers = []

//PUSH NOTES INTO ROWS AS 6 OCTAVES
for (var i = 6; i >= 1; i--) {
    rootNotes.forEach(function(item, index, array) {
      notes.push(item + i)
    });
}

//PUSH NOTENUMBER TO EACH CELL
for (var num = 95; num >= 24; num--) {
    noteNumbers.push(num)
}

let initialSynthState = {
  synth: synth.get(),
  sequencer:{
    mode: "creation",
    currentColumn: 0,
    grid: {
      notes: notes,
      noteNumbers: noteNumbers,
      columns: columns
    }

  }
};
console.log(initialSynthState)

export const synthReducer = (state = initialSynthState, action) => {
  //SYNTH ACTIONS
  if (action.type === actions.UPDATE_ATTACK) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        envelope: {...state.synth.envelope,
        attack: action.attack
        }
      }
    });
  }
  else if (action.type === actions.UPDATE_DECAY) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        envelope: {...state.synth.envelope,
        decay: action.decay
        }
      }
    });
  }
  else if (action.type === actions.UPDATE_SUSTAIN) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        envelope: {...state.synth.envelope,
        sustain: action.sustain
        }
      }
    });
  }
  else if (action.type === actions.UPDATE_RELEASE) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        envelope: {...state.synth.envelope,
        release: action.release
        }
      }
    });
  }
  else if (action.type === actions.UPDATE_VOLUME) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        volume: action.volume
      }
    });
  }
  else if (action.type === actions.MUTE_VOLUME) {
    return Object.assign({}, state, {
      synth:{...state.synth,
        oscillator:{...state.synth.oscillator,
        mute: action.bool
        }
      }
    });
  }
  //GRID ACTIONS

  else if (action.type === actions.PLAY_MODE) {
    return Object.assign({}, state, {
      grid:{...state.grid,
        mode: action.mode
      }
    })
  }

  return state;
}
