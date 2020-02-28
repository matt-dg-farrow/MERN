import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import {Container, Row} from "react-bootstrap"

export class Entry extends Component {

  

  render() {
    let url = "/movie/" + this.props.imdbID;

    return (
      
        <div>
          
          <img src={this.props.Poster} alt=""></img>
          <p>
            Title: {this.props.Title}
            <br />
            Type: {this.props.Type}
            <br />
            Year: {this.props.Year}
            <br />
            imdbID: {this.props.imdbID}
          </p>
          <Link to={url}>Details</Link>

        </div>
      
    );
  }
}

export default Entry;
