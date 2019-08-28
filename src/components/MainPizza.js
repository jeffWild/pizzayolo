import React, { Component } from "react";

import PizzaList from "./PizzaList";
import Panier from "./Panier";

class MainPizza extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzaPanierList: []
    };
  }

  ajoutPanier = (pizzaPanier) => {
    this.setState({pizzaPanierList: [...this.state.pizzaPanierList, pizzaPanier]});
    //console.log("ajoutPanier MAIN", pizzaPanier);
  };

  viderPanier = () => {
    this.setState({pizzaPanierList: []});
  };

  render() {
    //console.log("nb éléments dans le panier ", this.state.pizzaPanierList.length);
    return (
      <>
        <div className="columns is-multiline">
          <div className="column is-10-desktop is-12-tablet">
            <div className="filter-container">
              <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
            </div>
            <PizzaList ajoutPanier={this.ajoutPanier} />
          </div>
          <div className="column is-2-desktop is-12-tablet">
            <Panier pizzaPanierList={this.state.pizzaPanierList} viderPanier={this.viderPanier} />
          </div>
        </div>
      </>
    );
  }
}

export default MainPizza;
