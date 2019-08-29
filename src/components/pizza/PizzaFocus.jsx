import React, { Component } from "react";
import {fetchPizzaByName} from "../../services/fetchPizza"

class PizzaFocus extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizza:{}
    };
  }

  componentDidMount() {
    fetchPizzaByName(this.props.match.params.nom.toLowerCase()).then(pizza => {
      this.setState({
        pizza: pizza
      });
    }).catch((e)=>{
      this.setState({isLoading: false});
    });
  }

  render() {
    return (
      <>
        <div>{this.props.match.params.nom} - la meilleure pizza</div>          
      </>
    );
  }
}

export default PizzaFocus;
