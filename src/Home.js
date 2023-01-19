import logo from './logo.svg';
import './App.css';

import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

function Home() {
  return (
      <div className="homepage">
        <div className="menu-btn">
          <i className="fas fa-bars fa-2x"></i>
        </div>

        <div className="container">
          <div className="main-nav">
            <img src="img/dumbbell.png" alt="Health" className="logo"/>

              <ul className="main-menu">
                <li>
                  {/* Endpoint to route to Home component */}
                  <Link to="/rezepte">Rezepte</Link>
                </li>
                <li>
                  {/* Endpoint to route to Home component */}
                  <Link to="/workout">Workout</Link>
                </li>
                <li>
                  {/* Endpoint to route to Home component */}
                  <Link to="/standorte">Standorte</Link>
                </li>
              </ul>

              <img src="img/295128.png" alt="Login" className="login"/>
          </div>

          <section className="showcase">
            <div className="content">

            </div>
          </section>

          <section className="home-cards">
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </section>

          <section className="xbox">
            <div className="about">
              <h2>About Us</h2>
            </div>
            <div className="content">
              <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. </p>
              <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonum.</p>
              <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. </p>
            </div>
          </section>

          <section className="home-cards">
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
          </section>

          <section className="follow">
            <p>Follow Health Site</p>
            <a href="https://facebook.com">
              <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook"/>
            </a>
            <a href="https://twitter.com">
              <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter"/>
            </a>
            <a href="https://linkedin.com">
              <img src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin"/>
            </a>
          </section>
        </div>
        <section className="links">
          <div className="links-inner">
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
            <ul>

            </ul>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-inner">
            <div><i className="fas fa-globe fa-2x"></i> Deutsch (Schweiz)</div>
            <ul>
              <li><a href="#">Jaime Oberle</a></li>
              <li><a href="#">M306</a></li>
              <li><a href="#">Mattia Loiarro</a></li>
              <li><a href="#">Jaspreet Singh</a></li>
              <li><a href="#">Gianluca Ferrara</a></li>
              <li><a href="#">Tabea Bolliger</a></li>
              <li><a href="#">&copy; Health Site 2022</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
}

export default Home;
