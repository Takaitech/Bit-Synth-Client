import React from 'react';
import DropMenu from './drop-menu'
import './nav-bar.css'


export default function NavBar(props) {
  return(
    <nav className='light-box'>
      <DropMenu />
    </nav>
  )
}
