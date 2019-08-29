import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ajoutPanier } from "../panier/store/panierActions";

function Pizza({ id, nom, prix, ingredients, ajoutPizzaPanier }) {
  return (
    <>
      <div className="pizza-link">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="columns">
                  <div className="column is-9">
                    <Link to={`pizza/${nom}`} className="title is-4">{nom}</Link>
                  </div>
                  <div className="column is-3">
                    <p className="title is-4 has-text-primary">{prix}€</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">{ingredients}</div>
            <button
              type="button"
              className="button is-primary is-small is-rounded"
              onClick={() => ajoutPizzaPanier({ id, nom, prix })}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Pizza.defaultProps = {
  nom: "ceciestunepizza"
};

Pizza.propTypes = {
  prix: PropTypes.number.isRequired
};

const mapDispatchToProps = dispatch => ({
  ajoutPizzaPanier: ({id, nom, prix}) =>  {
    console.log("ajoutPizzaPanier");
    dispatch(ajoutPanier({id: id, nom: nom, prix: prix}))
   } // dispatch shortcut mapping
});

export default connect(undefined, mapDispatchToProps)(Pizza);
