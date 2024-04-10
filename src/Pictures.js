import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.photo) {
    return (
      <div className="Pictures rounded shadow mt-5">
        <div className="row">
          {props.photo.map(function (pic, index) {
            return (
              <div className="col-md-4">
                <a href={pic.src.original} target="_blank" rel="noreferrer">
                  <img
                    className="img-fluid rounded shadow mb-4"
                    src={pic.src.landscape}
                    key={index}
                    alt="pic"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
