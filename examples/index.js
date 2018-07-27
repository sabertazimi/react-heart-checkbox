import React from "react";
import { render } from "react-dom";
import HeartCheckbox from "../lib";
import "./styles.css";

function Demo() {
  return (
    <>
      <h1>Demo with examples of the component</h1>
      <HeartCheckbox>Wow what a button</HeartCheckbox>
    </>
  );
}

render(<Demo />, document.getElementById("app"));
