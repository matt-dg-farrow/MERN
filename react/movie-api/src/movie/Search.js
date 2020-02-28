import React, { Component } from "react";
import axios from "axios";
import Entry from "./Entry";
import { Navbar, Button, Card } from "react-bootstrap";

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [],
      individFilmInfo: "",
      apikey: "6f6ba751",
      query: ""
    };
  }

  searchInput = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  searchRequest = () => {
    let filmId = [];
    let searchedFilms = [];
    axios
      .get(
        "http://www.omdbapi.com/?s=" +
          this.state.query +
          "&apikey=" +
          this.state.apikey
      )
      .then(response => {
        console.log(response.data.Search.Title);
        let filmArray = response.data.Search;
        this.setState({ searchResult: filmArray });
        for (let i = 0; i < filmArray.length; i++) {
          filmId.push(filmArray[i].imdbID);
        }
      });
  };

  render() {
    return (
      <div>
        <Navbar>
          <input onChange={this.searchInput}></input>
          <Button onClick={this.searchRequest}>SEARCH</Button>
        </Navbar>
        <Card>
          {this.state.searchResult.map(film => (
            <Entry
              Title={film.Title}
              Poster={film.Poster}
              Type={film.Type}
              Year={film.Year}
              imdbID={film.imdbID}
            ></Entry>
          ))}
        </Card>
      </div>
    );
  }
}

export default Search;
