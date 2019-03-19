import {API_BASE_URL} from '../config'

//SYNTH ACTIONS

export const UPDATE_ATTACK = "UPDATE_ATTACK";
export const updateAttack = attack => ({
  type: UPDATE_ATTACK,
  attack
});

export const UPDATE_DECAY = "UPDATE_DECAY";
export const updateDecay = decay => ({
  type: UPDATE_DECAY,
  decay
});

export const UPDATE_SUSTAIN = "UPDATE_SUSTAIN";
export const updateSustain = sustain => ({
  type: UPDATE_SUSTAIN,
  sustain
});


export const UPDATE_RELEASE = "UPDATE_RELEASE";
export const updateRelease = release => ({
  type: UPDATE_RELEASE,
  release
});

export const UPDATE_VOLUME = "UPDATE_VOLUME";
export const updateVolume = volume => ({
  type: UPDATE_VOLUME,
  volume
});

export const MUTE_VOLUME = "MUTE_VOLUME";
export const muteVolume = bool => ({
  type: MUTE_VOLUME,
  bool
});

export const UPDATE_WIDTH = "UPDATE_WIDTH";
export const updateWidth = width => ({
  type: UPDATE_WIDTH,
  width
});

export const INIT_SYNTH = "INIT_SYNTH";
export const initSynth = synth => ({
  type: INIT_SYNTH
});

export const FETCH_PRESETS_SUCCESS = 'FETCH_PRESETS_SUCCESS';
export const fetchPresetsSuccess = preset => ({
    type: FETCH_PRESETS_SUCCESS,
    preset
});

export const fetchPresets = () => dispatch => {
    fetch(`${API_BASE_URL}/presets`, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
     })
       .then(res => {

        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(preset => {
        dispatch(fetchPresetsSuccess(preset));
    });
};


export const LOAD_PRESET_SUCCESS = 'LOAD_PRESET_SUCCESS';
export const loadPresetSuccess = preset => ({
    type: LOAD_PRESET_SUCCESS,
    preset
});



export const LOAD_PRESET = "LOAD_PRESET";
export const loadPreset = preset => ({
  type: LOAD_PRESET,
  preset
})


export const savePreset = preset => dispatch => {
  return fetch(`${API_BASE_URL}/presets`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(preset)
  })
  .then(res => res.status(200))
  .then(res => {
    return res.json()
  })
  .catch(err => console.log(err))
}

//GRID ACTIONS
export const PLAY_MODE = "PLAY_MODE";
export const playMode = mode => ({
  type: PLAY_MODE,
  mode
})

export const UPDATE_CURRENT_COLUMN = "UPDATE_CURRENT_COLUMN";
export const updateCurrentColumn = col => ({
  type: UPDATE_CURRENT_COLUMN,
  col
})
