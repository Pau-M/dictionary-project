import React from "react";
import ReactAudioPlayer from "react-audio-player";

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
      <a href="#" onClick={handleClick}>
        🔊
      </a>
      {props.phonetic.text}
    </div>
  );
}
