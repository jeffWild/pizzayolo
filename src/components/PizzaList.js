import React, { Component } from "react";
import TopBar from "./TopBar";
import Pizza from "./Pizza";

class PizzaList extends Component {
  render() {
    return (
      <>
        <TopBar />
        <section className="section main-container">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-10-desktop is-12-tablet">
                <div className="filter-container">
                  <h1 className="title is-h1">Nos Délicieuses Pizzas</h1>
                  <div className="field">
                    <label className="label">Filtrer: </label>
                    <div className="control">
                      <input
                        className="input is-primary"
                        type="text"
                        placeholder="nom de la pizza"
                      />
                    </div>
                    <Pizza
                      nom="Margerita"
                      price="10€"
                      ingredients="tomate, mozzarella, basilic, huile d'olive"
                    />
                    <Pizza
                      nom="Margerita"
                      price="10€"
                      ingredients="tomate, mozzarella, basilic, huile d'olive"
                    />
                    <Pizza
                      nom="Margerita"
                      price="10€"
                      ingredients="tomate, mozzarella, basilic, huile d'olive"
                    />
                    <Pizza
                      nom="Margerita"
                      price="10€"
                      ingredients="tomate, mozzarella, basilic, huile d'olive"
                    />
                    <Pizza
                      nom="Margerita"
                      price="10€"
                      ingredients="tomate, mozzarella, basilic, huile d'olive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PizzaList;
