import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import {Provider} from 'react-redux';
import {synth} from './reducers/index';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

//SUBSCRIBE SYNTH TO STORE
store.subscribe(() => {
  console.log('state changed');
  console.log(synth.get())
  let state = store.getState()
  synth.set({
    envelope: {
      attack: state.synth.envelope.attack,
      decay: state.synth.envelope.decay,
      sustain: state.synth.envelope.sustain,
      release: state.synth.envelope.release
    },
    oscillator: {
      type: state.synth.oscillator.type,
      mute: state.synth.oscillator.mute,
      width: state.synth.oscillator.width
    },
    volume: state.synth.volume
  })
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
