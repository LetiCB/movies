import React from "react";
import "./styles/about-hp.css";

export default function AboutHP(props) {
  return (
    <>
      <div className="about-container">
        <h2>{props.title}</h2>
        <p className="about-text">
          {props.intro}
        </p>
        <p className="about-text">
          {props.text}
        </p>
        <p className="about-text">
          {props.text1}
        </p>
        <p className="about-text">
          {props.text2} 
        </p>
      </div>
    </>
  );
}