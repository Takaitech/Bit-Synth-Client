import React from 'react';
import "./screen.css"
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./login"
import Grid from "./grid"

export default function Screen(props) {
  return (
    <div className="back-board">
      <main className="screen">
        <Route exact path="/"  component={Grid}  />
        <Route exact path="/login"  component={Login} />
      </main>
    </div>
  )
}
