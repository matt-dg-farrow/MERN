import React from 'react';
import Fruit from './Fruit'



class Trees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fruitType:'Orange'}
    };

    fruitChange = (event) => {
        this.setState({ fruitType: event.target.value});
    };

    fruitPicker = (fruit) => {
        alert('You picked a ' + fruit);
    };

    render() {
  return (
    <div>
      <Fruit fruitType={this.state.fruitType} fruitPicker={this.fruitPicker} fruitChange={this.fruitChange}/>
      {/* <input onChange={this.fruitChange}/> */}
    </div>
  );
}
}
export default Trees;
