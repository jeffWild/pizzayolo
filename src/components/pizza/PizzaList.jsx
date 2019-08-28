import React, { Component } from "react";
import Pizza from "../pizza/Pizza";
import Filter from "../utils/Filter"
import PropTypes from "prop-types";

export default function PizzaList(props) {
  return (
    <>
      <Filter updateFilter={props.updateFilter}/>
      <article className="message is-success">
        <div className="message-body">
          <b>{`${props.pizzaFilteredList.length} pizzas disponibles`}</b>
        </div>
      </article>
      <div className="columns is-multiline">
        {props.pizzaFilteredList.map((pizza) => (
          <div className="column is-4-desktop is-6-tablet" key={pizza.id}>
              <Pizza id={pizza.id} nom={pizza.nom} prix={pizza.prix} ingredients={pizza.ingredients} ajoutPanier={props.ajoutPanier}/>
              {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
            </div>
        ))}
      </div>
    </>
  );
}

PizzaList.PropTypes = {
  pizzaFilteredList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nom: PropTypes.string.isRequired,
      prix: PropTypes.number.isRequired,
      ingredients: PropTypes.string.isRequired
    })
  ).isRequired,
  updateFilter:PropTypes.func.isRequired,
  ajoutPanier:PropTypes.func.isRequired
};
