import React, { Component } from "react";
import PizzaList from "../pizza/PizzaList";
import {fetchPizza} from "../../services/fetchPizza"
import Chargement from "../utils/Chargement";

class PizzaListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzaList: [],
      isLoading: true,
      counter: 0,
      pizzaFilteredList:[]
    };
  }

  updateFilter = (event) => {
    const pizzaFilteredList = this.state.pizzaList.filter(pizza => {
      return pizza.nom.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({pizzaFilteredList: pizzaFilteredList})
  };

  updateFilterIngredient = (event) => {
    const pizzaFilteredList = this.state.pizzaList.filter(pizza => {
      return pizza.ingredients.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({pizzaFilteredList: pizzaFilteredList})
  };

  componentDidMount() {
    fetchPizza().then(pizzas => {
      this.setState({
        pizzaList: pizzas,
        pizzaFilteredList: pizzas,
        isLoading:false
      });
    }).catch((e)=>{
      this.setState({isLoading: false});
    });
  }

  render() {
    if (this.state.pizzaList.length === 0 && this.state.isLoading === false) {
      throw new Error("Un problème a eu lieu pendant le chargement des pizzas");
    } else if (this.state.isLoading) {
      return <Chargement/>;
    }
  
    return (
      <>
          <PizzaList 
          updateFilter={this.updateFilter} 
          updateFilterIngredient={this.updateFilterIngredient} 
          pizzaFilteredList={this.state.pizzaFilteredList}/>
      </>
    );
  }
}

export default PizzaListContainer;
