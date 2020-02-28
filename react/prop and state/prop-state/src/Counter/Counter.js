import React from 'react';



class Counter extends React.Component {

    render() {
  return (
    <div>
      <h1>{this.props.output}</h1>
      <button onClick={() => this.props.minus(10)}>-10</button>
      <button onClick={() => this.props.minus(1)}>-1</button>
      <button onClick={() => this.props.reset()}>Reset</button>
      <button onClick={() => this.props.plus(1)}>1</button>
      <button onClick={() => this.props.plus(10)}>10</button>
    </div>
  );
}
}
export default Counter;