import React, { Component } from "react";
import Pizza from "../pizza/Pizza";
import Filter from "../utils/Filter"

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
