import React, { Component } from "react";
import Logo from "../assets/Pizza-Yolo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function TopBar () {
    return (
      <div className="topbar">
        <nav className="is-primary navbar">
        <div className="navbar-brand">
            <Link className="navbar-item" exact to="/">
              <img src={Logo} alt="PizzaYolo logo" />
            </Link>
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
            <NavLink className="navbar-item"exact to="/" activeClassName="selected">
              Accueil
            </NavLink>
            <NavLink className="navbar-item" to="/pizzas" activeClassName="selected">
              Nos Pizzas
            </NavLink>
          </div>
        </div>
      </nav>
      </div>
    );
}