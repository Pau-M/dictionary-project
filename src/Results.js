import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results mt-5">
        <section className="word rounded shadow">
          <h2>{props.result.word}</h2>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <section key={index}>
                <Phonetics phonetic={phonetic} />
              </section>
            );
          })}
        </section>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <section className="rounded shadow" key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
