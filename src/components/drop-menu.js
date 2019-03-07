import React from 'react';
import "./drop-menu.css"


export default function DropMenu(props) {
  return(
    <div className="dropdown">
      <button type="button" className="dropbtn">
        <img className="icon" src={process.env.PUBLIC_URL + '/files/icons/open-icon.png'} alt="nav list" ></img>
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
        <a href="#">Init</a>
        <a href="#">Save Preset</a>
        <a href="#">Logout</a>
      </div>
    </div>
  )
}
