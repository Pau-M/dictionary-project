import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning mt-5">
        <h3 className="mb-3">{props.meaning.partOfSpeech}</h3>
        <div>
          <p>{props.meaning.definitions[0].definition}</p>
          <em className="opacity-75">{props.meaning.definitions[0].example}</em>
          <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
