import React, { Component } from "react";
import Pizza from "./Pizza";
import fetchPizza from "../services/fetchPizza"
import Chargement from "./Chargement";
import Filter from "./Filter"
import ErrorBoundary from "./ErrorBoundary";

class PizzaList extends Component {

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
    //console.log("passage dans le updateFilter, filtre: ", event.target.value);
    const pizzaFilteredList = this.state.pizzaList.filter(pizza => {
      //console.log("test de la pizza ", pizza.nom);
      return pizza.nom.toUpperCase().includes(event.target.value.toUpperCase());
    });
    //console.log("fin du updateFilter, il y a ", pizzaFilteredList.length, " dans la liste");
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
    //console.log("liste des pizza filtrées ", this.state.pizzaList);
    return (
      <>
        <Filter updateFilter={this.updateFilter}/>
        <article className="message is-success">
          <div className="message-body">
            <b>{`${this.state.pizzaFilteredList.length} pizzas disponibles`}</b>
          </div>
        </article>
        <div className="columns is-multiline">
          {this.state.pizzaFilteredList.map((pizza) => (
            <div className="column is-4-desktop is-6-tablet" key={pizza.id}>
                <Pizza id={pizza.id} nom={pizza.nom} prix={pizza.prix} ingredients={pizza.ingredients} ajoutPanier={this.props.ajoutPanier}/>
                {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
              </div>
          ))}
        </div>
      </>
    );
  }
}

export default PizzaList;
