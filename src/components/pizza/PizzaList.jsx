import React from "react";
import Pizza from "../pizza/Pizza";
import Filter from "../utils/Filter"
import PropTypes from "prop-types";

export function PizzaList({pizzaFilteredList, updateFilter, updateFilterIngredient}) {
  return (
    <>
      <Filter placeholder="nom de la pizza" updateFilter={updateFilter}/>
      <Filter placeholder="un ingrédient particulier" updateFilter={updateFilterIngredient}/>
      <article className="message is-success">
        <div className="message-body">
          <b>{`${pizzaFilteredList.length} pizzas disponibles`}</b>
        </div>
      </article>
      <div className="hero is-fullheight">
        <div className="columns is-multiline">
          {pizzaFilteredList.map((pizza) => (
            <div className="column is-4-desktop is-6-tablet" key={pizza.id}>
                <Pizza
                id={pizza.id} 
                nom={pizza.nom} 
                prix={pizza.prix} 
                ingredients={pizza.ingredients} />
                {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

PizzaList.propTypes = {
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

export default PizzaList;