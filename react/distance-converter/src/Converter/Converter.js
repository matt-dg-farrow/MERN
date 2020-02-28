import React from "react";
import Input from "./Input";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mileNumber: 0, kiloNumber: 0 };
    // this.state = {kiloNumber:0};
  }

  kiloToMileConversion = (event) => {
    this.setState({
      mileNumber: event.target.value / 1.6,
      kiloNumber: event.target.value
    });
  };
  mileToKiloConversion = (event) => {
    this.setState({
      kiloNumber: event.target.value * 1.6,
      mileNumber: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Input
          mileNumber={this.state.mileNumber}
          kiloNumber={this.state.kiloNumber}
          mileToKiloConversion={this.mileToKiloConversion}
          kiloToMileConversion={this.kiloToMileConversion}
        ></Input>
      </div>
    );
  }
}

export default Converter;
