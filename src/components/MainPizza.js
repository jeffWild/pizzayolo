import React, { Component } from "react";

import PizzaList from "./PizzaList";
import Panier from "./Panier";

class MainPizza extends Component {

  constructor(props) {
    super(props);

    this.state = {
      elementsPanier: []
    };
  }

  render() {
    return (
      <>
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-12-tablet">
            <div className="filter-container">
              <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
            </div>
            <PizzaList elementsPanier={this.state.elementsPanier}/>
          </div>
          <div className="column is-2-desktop is-12-tablet">
            <Panier elementsPanier={this.state.elementsPanier}/>
          </div>
        </div>
      </>
    );
  }
}

export default MainPizza;
