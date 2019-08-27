import React, { Component } from "react";
import Pizza from "./Pizza";
import fetchPizza from "../services/fetchPizza"

class PizzaList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzaSelectionneesList: [],
      pizzaList: []
    };
  }

  // ajoutPanier = function(pizza) {
  //   this.state.pizzaSelectionneesList = [...this.state.pizzaSelectionneesList, pizza];
  // }

  componentDidMount() {
    fetchPizza().then(pizzas => {
      this.setState({pizzaList: pizzas});
    })
  }

  render() {
    console.log(this.state);
    return (
      <>
        <div className="columns is-multiline">
          <div className="column is-4-desktop is-6-tablet">
          <Pizza nom="exemple" prix="10" ingredients="salade,tomate" ajoutPanier="{this.ajoutPanier}"/>
          {this.state.pizzaList.map((pizza) => (
          <Pizza nom={pizza.nom} prix={pizza.prix} ingredients={pizza.ingredients} ajoutPanier={this.ajoutPanier}/>
          ))}
          </div>
        </div>
      </>
    );
  }
}

export default PizzaList;
