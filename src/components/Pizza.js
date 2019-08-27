import React, { Component } from "react";
import PropTypes from "prop-types";

function Pizza ({nom,prix,ingredients}) {
    return (
      <>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <div className="columns">
                <div className="column is-9">
                  <p className="title is-4">{nom}</p>
                </div>
                <div className="column is-3">
                  <p className="title is-4 has-text-primary">{prix}€</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content">{ingredients}</div>
          <button type="button" 
                className="button is-primary is-small is-rounded">
                //onClick="this.props.ajoutPanier({nom,prix,ingredients})">
            Ajouter au panier
          </button>
        </div>
      </>
    );
}

Pizza.defaultProps = {
  nom: "ceciestunepizza"
};

Pizza.propTypes = {
  //prix: PropTypes.number.isRequired
};

export default Pizza;
