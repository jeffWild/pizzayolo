import React, { Component } from "react";
import TopBar from "./TopBar";
import Pizza from "./Pizza";
import Panier from "./Panier";
import Filter from "./Filter";

class PizzaList extends Component {

  render() {
    return (
      <>
        <div className="columns is-multiline">
          <div className="column is-4-desktop is-6-tablet">
            <Pizza prix="toto" ingredients="tomate,mozza,oeuf" id="1"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="margerita" prix="12" ingredients="tomate,mozza,oeuf" id="1"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="thon" prix="15" ingredients="tomate,mozza,thon,mayo" id="2"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="chevre" prix="11" ingredients="chevre, miel" id="3"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="carnivore" prix="13" ingredients="viande" id="4"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="saumon" prix="17" ingredients="saumon, fromage" id="5"/>
          </div>
          <div className="column is-4-desktop is-6-tablet">
            <Pizza nom="margerita" prix="toto" ingredients="tomate,mozza,oeuf" id="1"/>
          </div>
        </div>
      </>
    );
  }
}

export default PizzaList;
