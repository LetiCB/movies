import React from "react";
import "./styles/navbar.css";


export default function Navbar() {

    return (
        <>
        <div className="navbar-container"> 
            <div className="logo"><img src="../logo-bg.png"/></div>
            <div className="menu-items">
                <div className="item">Home</div>
                <div className="item">About</div>
                <div className="item">Contact</div>
            </div>
        </div>
        </>
    )
}