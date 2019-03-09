import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {synth} from './synth';
import './index.css';
import App from './components/App';
import store from './store';
import * as serviceWorker from './serviceWorker';



store.subscribe(() => {
  console.log('state changed');
  console.log(store.getState())
  let state = store.getState()
  synth.set({
    envelope: {
      attack: state.envelope.attack,
      decay: state.envelope.decay,
      sustain: state.envelope.sustain,
      release: state.envelope.release
    },
    oscillator: {
      type: state.oscillator.type,
      mute: state.oscillator.mute,
      width: state.oscillator.width
    },
    volume: state.volume
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
