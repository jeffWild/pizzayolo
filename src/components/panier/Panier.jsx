import React, { Component } from "react";
import PizzaPanier from "./PizzaPanier";
import { Link, withRouter } from 'react-router-dom';

class Panier extends Component {

  payer = () => {
    this.props.history.push('/paiement');
  };

  render() {
    return (
      <>
        <h2 className="title is-h2">Mon Panier</h2>
        {this.props.pizzaPanierList.map((pizzaPanier) => (
            <ul key={pizzaPanier.id}>
                <PizzaPanier nom={pizzaPanier.nom} prix={pizzaPanier.prix} id={pizzaPanier.id} enleverPanier={this.props.enleverPanier}/>
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
        <button className="button is-success" onClick={this.payer}>Payer</button>
      </>
    );
  }
}

export default withRouter(Panier);
