import React, { Component } from "react";

export class FormButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.submit}>{this.props.value}</button>
      </div>
    );
  }
}

export default FormButton;
