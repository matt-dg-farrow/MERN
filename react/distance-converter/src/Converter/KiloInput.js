import React from "react";

class KiloInput extends React.Component {
  render() {
    return (
      <div>
        <p>Kilometers: {this.props.number}</p>
        <input onChange></input>
      </div>
    );
  }
}

export default KiloInput;
