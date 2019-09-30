import React, { Component } from "react";
import search from "../src/utils";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: {}, loading: false, value: "" };
    this.queryForMovies = this.queryForMovies.bind(this);
    this.apiKey = "e3963faaff14ce2935d481ee7d0179fb";
  }

  async queryForMovies(queryText) {
    this.setState({ value: queryText, loading: true });
    const url = `https://api.themoviedb.org/3/search/movie?query=${queryText}&api_key=${this.apiKey}`;
    const results = await search(url);
    console.log("the results", results);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for..."
          value={this.state.value}
          onChange={event => this.queryForMovies(event.target.value)}
        />
      </div>
    );
  }
}
