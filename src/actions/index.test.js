import {
  UPDATE_ATTACK,
  updateAttack,
  UPDATE_DECAY,
  updateDecay,
  UPDATE_SUSTAIN,
  updateSustain,
  UPDATE_RELEASE,
  updateRelease,
  UPDATE_VOLUME,
  updateVolume,
  UPDATE_WIDTH,
  updateWidth,
  MUTE_VOLUME,
  muteVolume,
  INIT_SYNTH,
  initSynth,
  FETCH_PRESETS_SUCCESS,
  fetchPresetsSuccess,
  fetchPresets,
  LOAD_PRESET_SUCCESS,
  loadPresetSuccess,
  LOAD_PRESET,
  loadPreset,
  savePreset,
  PLAY_MODE,
  playMode,
  UPDATE_CURRENT_COLUMN,
  updateCurrentColumn } from './index';
  import {API_BASE_URL} from '../config'


describe('updateAttack', () => {
  it('Should return the action', () => {
    const attack = 1;
    const action = updateAttack(attack);
    expect(action.type).toEqual(UPDATE_ATTACK);
    expect(action.attack).toEqual(1);
  });
});

describe('updateDecay', () => {
  it('Should return the action', () => {
    const decay = 1;
    const action = updateDecay(decay);
    expect(action.type).toEqual(UPDATE_DECAY);
    expect(action.decay).toEqual(1);
  });
});

describe('updateSustain', () => {
  it('Should return the action', () => {
    const sustain = 1;
    const action = updateSustain(sustain);
    expect(action.type).toEqual(UPDATE_SUSTAIN);
    expect(action.sustain).toEqual(1);
  });
});

describe('updateRelease', () => {
  it('Should return the action', () => {
    const release = 1;
    const action = updateRelease(release);
    expect(action.type).toEqual(UPDATE_RELEASE);
    expect(action.release).toEqual(1);
  });
});

describe('updateVolume', () => {
  it('Should return the action', () => {
    const volume = 1;
    const action = updateVolume(volume);
    expect(action.type).toEqual(UPDATE_VOLUME);
    expect(action.volume).toEqual(1);
  });
});

describe('updateWidth', () => {
  it('Should return the action', () => {
    const width = 1;
    const action = updateWidth(width);
    expect(action.type).toEqual(UPDATE_WIDTH);
    expect(action.width).toEqual(1);
  });
});

describe('muteVolume', () => {
  it('Should return the action', () => {
    const bool = true;
    const action = muteVolume(bool);
    expect(action.type).toEqual(MUTE_VOLUME);
    expect(action.bool).toEqual(true);
  });
});

describe('initSynth', () => {
  it('Should return the action', () => {
    const synth = 1;
    const action = initSynth(synth);
    expect(action.type).toEqual(INIT_SYNTH);
    expect(action.synth).toEqual(1);
  });
});

describe('fetchPresetsSuccess', () => {
  it('Should return the action', () => {
    const presets = {
      presets: []
    };
    const action = fetchPresetsSuccess(presets);
    expect(action.type).toEqual(FETCH_PRESETS_SUCCESS);
    expect(action.preset).toEqual(presets);
  });
});

describe('fetchPresets', () => {
    it('Should dispatch fetchPresetsSuccess', () => {
        const savedPresets = {
            presets: []
        };
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return savedPresets;
                }
            })
        );
        const dispatch = jest.fn();
        return fetchPresets()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/presets`, {
              headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
             });
            expect(dispatch).toHaveBeenCalledWith(fetchPresetsSuccess(savedPresets));
        });
    });
});




describe('loadPresetSuccess', () => {
  it('Should return the action', () => {
    const preset = 1;
    const action = loadPresetSuccess(preset);
    expect(action.type).toEqual(LOAD_PRESET_SUCCESS);
    expect(action.preset).toEqual(1);
  })
})

describe('loadPreset', () => {
  it('Should return the action', () => {
    const preset = 1;
    const action = loadPreset(preset);
    expect(action.type).toEqual(LOAD_PRESET);
    expect(action.preset).toEqual(1);
  })
})

describe('playMode', () => {
  it('Should return the action', () => {
    const mode = 'play';
    const action = playMode(mode);
    expect(action.type).toEqual(PLAY_MODE);
    expect(action.mode).toEqual('play');
  })
})


describe('updateCurrentColumn', () => {
  it('Should return the action', () => {
    const col = 1;
    const action = updateCurrentColumn(col);
    expect(action.type).toEqual(UPDATE_CURRENT_COLUMN);
    expect(action.col).toEqual(1);
  })
})


describe('savePreset', () => {
    it('Should call fetch post request', () => {
        const preset = {
            preset: []
        };
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return preset;
                }
            })
        );
        const dispatch = jest.fn();
        return savePreset()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/presets`, {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              }
            });
        });
    });
});
