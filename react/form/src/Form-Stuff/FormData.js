import React, { Component } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

export class FormData extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "" };
  }

  updateInfo = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  //     USING IFS:
  //     if(name==='username') {
  //         this.setState({username:value})
  //     }
  //     if(name==='email') {
  //         this.setState({email:value})
  //     }
  //     if(name==='password') {
  //         this.setState({password:value})
  //     }
  //   }

  printInfo = (event) => {
      event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.printInfo}>
          <FormInput
            name="username"
            updateInfo={this.updateInfo}
            value={this.state.username}
          ></FormInput>
          <FormInput
            name="email"
            type="email"
            updateInfo={this.updateInfo}
            value={this.state.email}
          ></FormInput>
          <FormInput
            name="password"
            type="password"
            updateInfo={this.updateInfo}
            value={this.state.password}
          ></FormInput>
          <FormInput
            name="submit"
            type="submit"
            // printInfo={this.printInfo}
            value="SUBMIT"
          ></FormInput>
          {/* OR FOR BUTTON USE (further breaks down components)
                <FormButton value='SUBMIT' submit={this.printInfo}></FormButton> */}
        </form>
      </div>
    );
  }
}

export default FormData;
