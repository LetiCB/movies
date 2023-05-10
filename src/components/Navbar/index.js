import React from "react";
import "./styles/navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {

    return (
        <>
            <div className="navbar-container"> 
                <div className="logo">
                <Link to={"/"}><img src="../logo-bg.png"/></Link>
                    <div><Link to={"/"}>MOVIESDOM</Link></div>
                </div>
                <div className="menu-items">
                    <div className="item"><Link to={"/"}>Home</Link></div>
                    <div className="item"><Link to={"/about"}>About</Link></div>
                    <div className="item"><Link to={"/contact"}>Contact</Link></div>
                </div>
            </div>
        </>
    )
}