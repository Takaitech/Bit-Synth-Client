import React from 'react';
import Grid from './grid'
import PresetMenu from './preset-menu'
import './screen.css'


const Screen = () => {
  return (
    <div className='back-board'>
      <main className='screen'>
        <Grid />
        <PresetMenu />
      </main>
    </div>
  )
}
