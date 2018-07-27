import React from "react";
import { render } from "react-dom";
import HeartCheckbox from "../lib";
import "./styles.css";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onClick = (evnet, props) => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { checked } = this.state;

    return (
      <>
        <h1>{checked ? 'checked' : 'unchecked'}</h1>
        <HeartCheckbox checked={checked} onClick={this.onClick} />
      </>
    );
  }
}

render(<Demo />, document.getElementById("app"));
