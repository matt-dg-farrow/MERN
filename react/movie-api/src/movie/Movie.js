import React, { Component } from "react";
import axios from "axios";
import MovieInfo from './MovieInfo'

export class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      individFilmInfo: {},
      apikey: "6f6ba751",
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    
    
    axios
      .get(
        "http://www.omdbapi.com/?i=" +
          this.props.match.params.id +
          "&apikey=" +
          this.state.apikey
      )
      .then(response => {
        console.log(response);
        
        let filmObject = {
          Title: response.data.Title,
          Year: response.data.Year,
          Genre: response.data.Genre,
          Actors: response.data.Actors,
          Rated: response.data.Rated,
          Released: response.data.Released,
          Metascore: response.data.Metascore,
          Poster: response.data.Poster
        };
        this.setState({individFilmInfo:filmObject})
      });
  }

  getFilmInfo = () => {
    axios
      .get(
        "http://www.omdbapi.com/?i=" +
          this.props.match.params.id +
          "&apikey=" +
          this.state.apikey
      )
      .then(response => {
        let filmObject = {
          Title: response.Title,
          Year: response.Year,
          Genre: response.Genre,
          Actors: response.Actors,
          Rated: response.Rated,
          Released: response.Released,
          Metascore: response.Metascore
        };
        this.setState({individFilmInfo:filmObject})
      });
  };

  render() {
    
    console.log(this.state.individFilmInfo);
    

    return <MovieInfo getFilmInfo={this.getFilmInfo} info={this.state.individFilmInfo}></MovieInfo>;
  }
}

export default Movie;
