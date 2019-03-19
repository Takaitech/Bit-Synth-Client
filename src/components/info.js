import React from 'react';
import './info.css'


function hideInfo() {
  let element = document.getElementsByClassName('info-page')
    element[0].style.display = 'none'
}

export default function Info(props) {
  return (
    <div className='info-page'>
      <img className='bit-synth-image' src='/files/guide.png' onClick={e => {hideInfo(e)}} alt='guide'/>
    </div>
  )
}
