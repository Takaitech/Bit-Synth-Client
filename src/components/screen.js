import React from 'react';
import Grid from './grid'
import PresetMenu from './preset-menu'
import './screen.css'


export default function Screen(props) {
  return (
    <div className='back-board'>
      <main className='screen'>
        <Grid />
        <PresetMenu />
      </main>
    </div>
  )
}
