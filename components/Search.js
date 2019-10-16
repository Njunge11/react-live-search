import React, { useState, useContext } from "react";
import queryMovies from "../src/util";
import publicRuntimeConfig from "../src/config";
import ThemeContext from "../src/ThemeContext";
const searchImage =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIg%0D%0AaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5LjMgKDUxMTY3KSAtIGh0%0D%0AdHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uLW1h%0D%0AZ25pZmllci1ncmV5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNj%0D%0APgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlN0eWxlZ3VpZGUtcHJlc2VudGF0aW9uIiBz%0D%0AdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVu%0D%0Ab2RkIj4KICAgICAgICA8ZyBpZD0iOC5pY29ucyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTY3NC4w%0D%0AMDAwMDAsIC0zNDguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJpY29uX19tYWduaWZpZXIi%0D%0AIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY3NC4wMDAwMDAsIDM0OC4wMDAwMDApIj4KICAgICAgICAg%0D%0AICAgICAgIDxyZWN0IGlkPSJpY29uX19zZWFyY2giIHg9IjAiIHk9IjAiIHdpZHRoPSIxNiIgaGVp%0D%0AZ2h0PSIxNiI+PC9yZWN0PgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0LjY2NjY2NjcsMTQu%0D%0ANjY2NjY2NyBMMTAuNjY2NjY2NywxMC42NjY2NjY3IiBpZD0iTGluZSIgc3Ryb2tlPSIjN0E4Qzk5%0D%0AIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4KICAgICAg%0D%0AICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtNCIgc3Ryb2tlPSIjN0E4Qzk5IiBzdHJva2Utd2lk%0D%0AdGg9IjIiIGN4PSI2LjY2NjY2NjY3IiBjeT0iNi42NjY2NjY2NyIgcj0iNS4zMzMzMzMzMyI+PC9j%0D%0AaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";
const apiKey = publicRuntimeConfig.apiKey;

function searchBar(value, queryForMovies) {
  return (
    <div className="container search-bar-container">
      <div className="span-col-6">
        <div className="search-container">
          <img className="search-image" src={searchImage} />
          <input
            value={value}
            className="search-box"
            type="search"
            name="search"
            placeholder="Search movies..."
            onChange={event => queryForMovies(event.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
}

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);
  async function queryForMovies(queryText) {
    setValue(queryText);
    const url = `${publicRuntimeConfig.apiURL}?s=${queryText}&page=1&apikey=${apiKey}`;
    const movies = await queryMovies(url, 1);
    setMovies(movies || []);
    setTheme({
      loadSpinner: false,
      loadCards: true,
      default: false,
      movies: movies
    });
  }
  return searchBar(value, queryForMovies);
};

export default Search;
