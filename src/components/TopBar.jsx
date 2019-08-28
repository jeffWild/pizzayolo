import React, { Component } from "react";
import Logo from "../assets/Pizza-Yolo.png";

class TopBar extends Component {
  render() {
    return (
      <nav className="is-primary navbar">
        <div className="navbar-brand">
          <a className="navbar-item active" href="#">
            <img src={Logo} alt="PizzaYolo logo" />
          </a>
          <button
            className="navbar-burger"
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start">
            <a className="navbar-item" href="#">
              Accueil
            </a>
            <a className="navbar-item selected" href="#">
              Nos Pizzas
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopBar;
