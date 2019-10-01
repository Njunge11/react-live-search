// import React, { Component } from "react";
// import Layout from "../components/Layout";
// import search from "../src/util";
// export default class Index extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { movies: {}, value: "", loading: false };
//     this.queryForMovies = this.queryForMovies.bind(this);
//     this.apiKey = "e3963faaff14ce2935d481ee7d0179fb";
//   }

//   async queryForMovies(queryText) {
//     this.setState({ value: queryText, loading: true });
//     const url = `https://api.themoviedb.org/3/search/movie?query=${queryText}&api_key=${this.apiKey}`;
//     const movies = await search(url);
//     console.log("the movies", movies);
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Search here,,,"
//           value={this.state.value}
//           onChange={event => this.queryForMovies(event.target.value)}
//         />
//       </div>
//     );
//   }
// }
import withLayout from "../components/Layout";
import Search from "../components/Search";
import IndexDefault from "../components/IndexDefault";
const Index = () => {
  return (
    <div>
      <Search />
      <IndexDefault />
    </div>
  );
};
export default withLayout(Index);
