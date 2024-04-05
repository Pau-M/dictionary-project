import React from "react";

export default function Phonetics(props) {
  function handleClick(event) {
    event.preventDefault();
    playSound(props.phonetic.audio);
  }
  function playSound(audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play();
  }

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        🔊
      </button>
      {props.phonetic.text}
    </div>
  );
}
