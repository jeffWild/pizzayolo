import React, { Component } from "react";

import Panier from "../panier/Panier";
import ErrorBoundary from "../utils/ErrorBoundary";
import PizzaListContainer from "../pizza/PizzaListContainer";

class MainPizza extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzaPanierList: [],
      sequence: 0
    };
  }

  incrementeSequence = () => {
    this.setState({sequence: this.state.sequence + 1});
  };

  ajoutPanier = ({id, nom, prix}) => {
    this.setState({pizzaPanierList: [...this.state.pizzaPanierList, {id: this.state.sequence, nom: nom, prix: prix}]});
    this.incrementeSequence();
  };

  viderPanier = () => {
    var result = confirm("Etes-vous sûr de vouloir vider le panier ?");
    if (result) {
      this.setState({pizzaPanierList: []});
    }
  };

  enleverPanier = (pizzaAEnlever) => {
    const filtered = this.state.pizzaPanierList.filter((pizzaPanier) => {
      return pizzaPanier.id !== pizzaAEnlever.id;
    });
    this.setState({pizzaPanierList: filtered});
  };

  render() {
    return (
      <>
        <ErrorBoundary>
          <div className="columns is-multiline">
            <div className="column is-10-desktop is-12-tablet">
              <div className="filter-container">
                <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
              </div>
              <PizzaListContainer ajoutPanier={this.ajoutPanier} />
            </div>
            <div className="column is-2-desktop is-12-tablet">
              <Panier pizzaPanierList={this.state.pizzaPanierList} viderPanier={this.viderPanier} enleverPanier={this.enleverPanier}/>
            </div>
          </div>
        </ErrorBoundary>
      </>
    );
  }
}

export default MainPizza;
