import * as actions from "../actions";
import {synth} from "../synth";

console.log(synth)
let initialSynthState = synth.get();
console.log(initialSynthState)

export const synthReducer = (state = initialSynthState, action) => {
  if (action.type === actions.UPDATE_ATTACK) {
    return Object.assign({}, state, {
      envelope:{...state.envelope,
        attack: action.attack
      }
    });
  }
  else if (action.type === actions.UPDATE_DECAY) {
    return Object.assign({}, state, {
      envelope:{...state.envelope,
        decay: action.decay
      }
    });
  }
  else if (action.type === actions.UPDATE_SUSTAIN) {
    return Object.assign({}, state, {
      envelope:{...state.envelope,
        sustain: action.sustain
      }
    });
  }
  else if (action.type === actions.UPDATE_RELEASE) {
    return Object.assign({}, state, {
      envelope:{...state.envelope,
        release: action.release
      }
    });
  }
  else if (action.type === actions.UPDATE_VOLUME) {
    return Object.assign({}, state, {
        volume: action.volume
    });
  }
  else if (action.type === actions.MUTE_VOLUME) {
    return Object.assign({}, state, {
      oscillator:{...state.oscillator,
        mute: action.bool
      }
    });
  }

  return state;
}
