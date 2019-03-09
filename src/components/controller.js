import React from "react";
import "./controller.css";
import Keyboard from "./keyboard"
import Envelope from "./envelope"
import Volume from "./volume"


export default function Controller(props) {

  return (
    <div className="controller">
    <Envelope />
    <Keyboard />
    <Volume />
    </div>
  )
}
