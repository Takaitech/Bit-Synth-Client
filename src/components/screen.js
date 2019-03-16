import React from 'react';
import "./screen.css"
import Grid from "./grid"
import PresetMenu from './preset-menu'

export default function Screen(props) {
  return (
    <div className="back-board">
      <main className="screen">
        <Grid />
        <PresetMenu />
      </main>
    </div>
  )
}
