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
    alert(`Searching for ${keyWord}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function keyWordChange(event) {
    setKeyWord(event.target.value);
  }
  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={keyWordChange} autoFocus={true} />
      </form>
      <Results result={result} />
    </div>
  );
}
