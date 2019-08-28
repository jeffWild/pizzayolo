import React, { Component } from "react";
import PizzaPanier from "./PizzaPanier";

class Panier extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      pizzaPanierList: [{nom:"pizza1", prix:"10"}]
    };
  }

  render() {
    return (
      <>
        <h2 className="title is-h2">Mon Panier</h2>
        {this.state.pizzaPanierList.map((pizza, i) => (
            <ul key={pizza.id}>
                <PizzaPanier nom={pizza.nom} prix={pizza.prix}/>
                {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
              </ul>
          ))}
        <hr />
        <p>
          <b>{`Nombre de pizzas : ${this.state.pizzaPanierList.length}`}</b>
          <br />
          <b>{`Total: ${this.state.total} €`}</b>
        </p>
        <br />
        <button className="button is-warning">Vider le panier</button>
      </>
    );
  }
}

export default Panier;
