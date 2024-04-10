import React from "react";
import "./Phonetic.css";

export default function Phonetics(props) {
  function handleClick(event) {
    event.preventDefault();
    playSound(props.phonetic.audio);
  }
  function playSound(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play();
  }
  if (props.phonetic.audio) {
    return (
      <div className="Phonetic">
        <button className="btn" onClick={handleClick}>
          🔈
        </button>
        <p>{props.phonetic.text}</p>
      </div>
    );
  } else {
    return (
      <div className="Phonetic">
        <p>{props.phonetic.text}</p>
      </div>
    );
  }
}
