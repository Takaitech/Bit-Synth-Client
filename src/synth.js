
const Tone = require('tone');

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
