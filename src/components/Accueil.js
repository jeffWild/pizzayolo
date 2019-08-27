import React, { Component } from "react";

class Accueil extends Component {
  render() {
    return (
      <section className="hero is-primary is-fullheight homepage">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1">Pizza Yolo</h1>
            <h2 className="subtitle is-size-3">
              Juste les <span className="best">meilleures</span> pizzas.
            </h2>
            <a href="#" className="button is-large is-primary">
              Commander maintenant
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Accueil;
