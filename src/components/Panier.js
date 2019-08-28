import React, { Component } from "react";
import PizzaPanier from "./PizzaPanier";

class Panier extends Component {

  render() {
    return (
      <>
        <h2 className="title is-h2">Mon Panier</h2>
        {this.props.pizzaPanierList.map((pizzaPanier, i) => (
            <ul key={i}>
                <PizzaPanier nom={pizzaPanier.nom} prix={pizzaPanier.prix}/>
                {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
              </ul>
          ))}
        <hr />
        <p>
          <b>{`Nombre de pizzas : ${this.props.pizzaPanierList.length}`}</b>
          <br />
          <b>{`Total: ${this.props.pizzaPanierList.reduce((total, pizzaPanier) => {
                    return total + pizzaPanier.prix;
                  }, 0)} €`}
          </b>
        </p>
        <br />
        <button className="button is-warning" onClick={() => this.props.viderPanier()}>Vider le panier</button>
      </>
    );
  }
}

export default Panier;
