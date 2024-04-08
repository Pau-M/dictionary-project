import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultWord);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keyWordChange(event) {
    setKeyWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <form
          className="d-flex align-items-center justify-content-center m-5"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            className="search-input rounded w-50"
            onChange={keyWordChange}
            autoFocus={true}
            defaultValue={props.defaultWord}
            placeholder="Type a word..."
          />
          <input type="submit" className="btn btn-dark" value="Search" />
        </form>
        <Results result={result} />
      </div>
    );
  } else {
    load();
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
