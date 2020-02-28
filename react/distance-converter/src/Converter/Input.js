import React from "react";

class Input extends React.Component {

  render() {
    return (
      <div>
          <p>Kilometers:</p>
          <input placeholder="0" value={this.props.kiloNumber}  onChange={this.props.kiloToMileConversion}></input>
          <p>Miles:</p>
          <input placeholder="0" value={this.props.mileNumber} onChange={this.props.mileToKiloConversion}></input>
      </div>
    );
  }
}

export default Input;
