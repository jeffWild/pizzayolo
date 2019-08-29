import React, { Component } from "react";
import PizzaList from "../pizza/PizzaList";
import {fetchPizza} from "../../services/fetchPizza"
import Chargement from "../utils/Chargement";
import { connect } from 'react-redux';
import { setPizzaList } from "./store/pizzaActions";

class PizzaListContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      counter: 0,
      pizzaFilteredList:[]
    };
  }

  updateFilter = (event) => {
    const pizzaFilteredList = this.props.pizzaList.filter(pizza => {
      return pizza.nom.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({pizzaFilteredList: pizzaFilteredList})
  };

  updateFilterIngredient = (event) => {
    const pizzaFilteredList = this.props.pizzaList.filter(pizza => {
      return pizza.ingredients.toUpperCase().includes(event.target.value.toUpperCase());
    });
    this.setState({pizzaFilteredList: pizzaFilteredList})
  };

  componentDidMount() {
    if (this.props.pizzaList.length === 0) {
      fetchPizza().then(pizzas => {
        this.props.setPizzas(pizzas);
        this.setState({
          pizzaFilteredList: pizzas,
          isLoading:false
        });
      }).catch((e)=>{
        this.setState({isLoading: false});
      });
    } else {
      this.setState({
        pizzaFilteredList: this.props.pizzaList,
        isLoading:false
      });
    }
  }

  render() {
    if (this.props.pizzaList.length === 0 && this.state.isLoading === false) {
      throw new Error("Un problème a eu lieu pendant le chargement des pizzas");
    } else if (this.state.isLoading) {
      return <Chargement/>;
    }
  
    return (
      <>
          <PizzaList 
          sequence={this.props.sequence}
          updateFilter={this.updateFilter} 
          updateFilterIngredient={this.updateFilterIngredient} 
          pizzaFilteredList={this.state.pizzaFilteredList}/>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log("sequence", state.pizzaReducer.sequence);
  return {
    pizzaList: state.pizzaReducer.pizzaList,
    sequence: state.pizzaReducer.sequence
  }
 };

 const mapDispatchToProps = dispatch => ({
  setPizzas: (pizzaList) =>  {
    dispatch(setPizzaList(pizzaList))
   } // dispatch shortcut mapping
});

export default connect(mapStateToProps,mapDispatchToProps)(PizzaListContainer);
