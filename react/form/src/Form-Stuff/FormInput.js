import React, { Component } from "react";

export class FormInput extends Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type || "text"}
          name={this.props.name || ""}
          value={this.props.value || ""}
          placeholder={this.props.placeholder || this.props.name || ""}
          onChange={this.props.updateInfo}
          onClick={this.props.printInfo}
        ></input>
      </div>
    );
  }
}

export default FormInput;
