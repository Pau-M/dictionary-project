import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Pictures from "./Pictures";

export default function Dictionary(props) {
  let [keyWord, setKeyWord] = useState(props.defaultWord);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photo, setPhoto] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handlePicture(response) {
    setPhoto(response.data.photos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    let sheCodesPicKey = "630f42beb1a6c0d29a44a494adtbfo6a";
    let urlSCPic = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${sheCodesPicKey}`;

    axios.get(urlSCPic).then(handlePicture);
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
        <section>
          <form
            className="d-flexjustify-content-center mt-5"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              className="search-input rounded"
              onChange={keyWordChange}
              autoFocus={true}
              defaultValue={props.defaultWord}
              placeholder="Type a word..."
            />
            <input
              type="submit"
              className="button-submit btn shadow"
              value="Search"
            />
          </form>
          <small>E.g. cat, rice, unique</small>
        </section>
        <Results result={result} />
        <section>
          <Pictures photo={photo} />
        </section>
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
