import React from 'react';
import Counter from './Counter'


class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0}
    };

    reset = () => {
        this.setState({number: 0})
    }

    plus = (num) => {
        this.setState({number: (this.state.number + num)})
    }

    minus = (num) => {
        this.setState({number: (this.state.number - num)})
    }

    render() {
  return (
    <div>
      <Counter output={this.state.number} reset={this.reset} plus={this.plus} minus={this.minus}/>
      {/* <input onChange={this.fruitChange}/> */}
    </div>
  );
}
}
export default Number;


