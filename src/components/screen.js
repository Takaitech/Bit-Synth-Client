import React from 'react';
import "./screen.css"
import Login from "./login"

export default function Screen(props) {
  return (
    <div className="back-board">
      <main className="screen">
        <Login />
      </main>
    </div>
  )
}
