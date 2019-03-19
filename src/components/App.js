import React from 'react';
import './App.css';
import NavBar from './nav-bar'
import Screen from './screen'
import Controller from './controller'
import Info from './info'

function showInfo() {
  let element = document.getElementsByClassName('info-page')
    element[0].style.display = "block"
}

export default class App extends React.Component {
  render() {
    return (
      <div className='machine'>
        <input className='info-button' type='image' src='/files/info.png' onClick={e => {showInfo(e)}} alt='info'   />
        <Info className='info-page'  />
        <NavBar />
        <Screen />
        <Controller />
        <div className='bottom-cover'>
        </div>
      </div>
    );
  }
}
