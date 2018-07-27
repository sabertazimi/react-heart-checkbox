import React, { Component } from "react";
import "./index.css";

class HeartCheckbox extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className="heart-checkbox" onClick={onClick} >
      </button>
    );
  }
}

export default HeartCheckbox;
