import React from "react";
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import "./App.css";
import Tone from 'tone';
import NavBar from "./nav-bar"
import Screen from "./screen"
import Controller from "./controller"

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <div className="machine">
        <Route path="/" component={NavBar} />
        <Route path="/" component={Screen} />
        <Route path="/"  component={Controller} />
        <div className="bottom-cover">
        </div>
      </div>
    </Router>
    );
  }
}
