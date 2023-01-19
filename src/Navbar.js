import React from "react";
import logo from "./dumbbell.png"
import login from "./295128.png"
import './App.css';

export default function Navbar(){
    return(
        <nav className="main-nav">
            <img src={logo} alt="Health" className="logo"/>
            <a href="/home">
                Health Site
            </a>
            <ul className="main-menu">
                <li><a href="/rezepte">Rezepte</a></li>
                <li><a href="/workout">Workouts</a></li>
                <li><a href="/standorte">Standorte</a></li>
            </ul>
            <img src={login} alt="Login" className="login"/>
        </nav>
    )
}