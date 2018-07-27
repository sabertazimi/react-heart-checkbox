import React, { Component } from "react";

class HeartCheckbox extends Component {
  render() {
    const { color, children, onClick } = this.props;

    return (
      <button onClick={onClick} style={{ color }}>
        {children}
      </button>
    );
  }
}

export default HeartCheckbox;
