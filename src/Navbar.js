import React from "react";
import './App.css';

export default function Navbar(){
    return(
        <nav className="main-nav">
            <img src="/img/dumbbell.png" alt="Health" className="logo"/>
            <a href="/home">
                Health Site
            </a>
            <ul className="main-menu">
                <li><a href="/rezepte">Rezepte</a></li>
                <li><a href="/workout">Workouts</a></li>
                <li><a href="/standorte">Standorte</a></li>
            </ul>
            <img src="/img/295128.png" alt="Login" className="login"/>
        </nav>
    )
}