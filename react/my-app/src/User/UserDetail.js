import React from "react";

class UserDetail extends React.Component {
    render() {
  return (
    <ul>
      <li>Name: {this.props.userData.name}</li>
      <li>DoB: {this.props.userData.dob}</li>
      <li>City: {this.props.userData.city}</li>
    </ul>
  );
}
}

export default UserDetail;
