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



//GRID ACTIONS
export const PLAY_MODE = "PLAY_MODE";
export const playMode = mode => ({
  type: PLAY_MODE,
  mode
})
