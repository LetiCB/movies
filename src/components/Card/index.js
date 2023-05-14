import React from "react";
import "./styles/card.css";

export default function Card(props){

    return(
        <>
        <div className="card-container">
            <div className="photo"><img src={props.image}/></div>
            <div className="character">{props.name}</div>
            <div className="actor">{props.actor}</div>
        </div>
        </>
    )
}
