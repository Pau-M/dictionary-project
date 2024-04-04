import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyWord, setKeyWord] = useState("");
  let [result, setResult] = useState(null);
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form
        className="d-flex align-items-center justify-content-center m-5"
        onSubmit={search}
      >
        <input
          type="search"
          className="search-input rounded w-50"
          onChange={keyWordChange}
          autoFocus={true}
        />
        <input type="submit" className="btn btn-dark" value="Search" />
      </form>
      <Results result={result} />
    </div>
  );
}
