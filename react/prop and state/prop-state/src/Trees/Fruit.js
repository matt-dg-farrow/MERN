import React from "react";

class Fruit extends React.Component {
  render() {
    return (
      <div>
        <h1>On the tree grows a {this.props.fruitType}</h1>
        <input onChange={this.props.fruitChange}></input>
        <button onClick={() =>this.props.fruitPicker(this.props.fruitType)}>Pick the fruit!</button>
      </div>
    );
  }
}

export default Fruit;
