import React from "react";
import "./App.css";
import NavBar from "./nav-bar"
import Screen from "./screen"
import Controller from "./controller"


export default class App extends React.Component {
  render() {
    return (
      <div className="machine">
        <NavBar />
        <Screen />
        <Controller />
        <div className="bottom-cover">
        </div>
      </div>
    );
  }
}
