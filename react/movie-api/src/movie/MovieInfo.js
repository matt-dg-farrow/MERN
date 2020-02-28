import React, { Component } from "react";

export class MovieInfo extends Component {
  render() {
    return (
      <div>
        <img src={this.props.info.Poster} alt=""></img>
        <p>
          Title: {this.props.info.Title}
          <br />
          Year: {this.props.info.Year}
          <br />
          Genre: {this.props.info.Genre}
          <br />
          Actors: {this.props.info.Actors}
          <br />
          Rated: {this.props.info.Rated}
          <br />
          Released: {this.props.info.Released}
          <br />
          Metascore: {this.props.info.Metascore}
          <br />
        </p>
      </div>
    );
  }
}

export default MovieInfo;
