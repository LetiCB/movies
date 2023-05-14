import React from "react";
import "./styles/about.css";

export default function About(props) {
  return (
    <>
      <div className="about-container">
        <h2>{props.title}</h2>
        <p className="about-text">
          {props.text}
        </p>
      </div>
    </>
  );
}
