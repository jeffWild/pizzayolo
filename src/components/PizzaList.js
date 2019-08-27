import React, { Component } from "react";
import Pizza from "./Pizza";
import fetchPizza from "../services/fetchPizza"
import Chargement from "./Chargement";

class PizzaList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzaSelectionneesList: [],
      pizzaList: [],
      isLoading: true
    };
  }

  // ajoutPanier = function(pizza) {
  //   this.state.pizzaSelectionneesList = [...this.state.pizzaSelectionneesList, pizza];
  // }

  componentDidMount() {
    fetchPizza().then(pizzas => {
      this.setState({pizzaList: pizzas});
      this.setState({isLoading: false});
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Chargement/>;
    }
    return (
      <>
        <div className="columns is-multiline">
        
        })}
          
          {this.state.pizzaList.map((pizza, i) => (
            <div className="column is-4-desktop is-6-tablet" key={i}>
                <Pizza key={i} id={this.id} nom={pizza.nom} prix={pizza.prix} ingredients={pizza.ingredients} ajoutPanier={this.ajoutPanier}/>
              </div>
          ))}
        </div>
      </>
    );
  }
}

export default PizzaList;
