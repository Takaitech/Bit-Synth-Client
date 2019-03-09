import React from 'react';
import './nav-bar.css'
import DropMenu from "./drop-menu"

export default function NavBar(props) {
  return(
        <nav className="light-box">
          <DropMenu />
        </nav>
  )
}
