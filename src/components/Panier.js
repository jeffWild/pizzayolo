import React, { Component } from "react";

class Panier extends Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0
    };
  }

  render() {
    return (
      <>
        <h2 className="title is-h2">Mon Panier</h2>
        <ul>
          {this.props.elementsPanier}
        </ul>
        <hr />
        <p>
          <b>Total: {this.state.total} €</b>
        </p>
        <br />
        <button className="button is-warning">Vider le panier</button>
      </>
    );
  }
}

export default Panier;
