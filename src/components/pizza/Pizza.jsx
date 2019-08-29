import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { ajoutPanier, incrementeSequence } from "../panier/store/panierActions";

function Pizza({ sequence, nom, prix, ingredients, ajoutPizzaPanier }) {
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
              onClick={() => {ajoutPizzaPanier({ sequence, nom, prix })}}
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

const mapStateToProps = state => {
  console.log("Pizza.jsx - mapStateToProps - state", state);
  return {
    sequence: state.pizzaReducer.sequence
  }
};

const mapDispatchToProps = dispatch => ({
  ajoutPizzaPanier: ({sequence, nom, prix}) =>  {
    console.log("Pizza.jsx - mapDispatchToProps - ajoutPizzaPanier - sequence : ", sequence);
    dispatch(ajoutPanier({id: sequence, nom: nom, prix: prix}), incrementeSequence(sequence));
   },
  // incrSeq: (sequence) => {
  //   console.log("Pizza.jsx - mapDispatchToProps - incrSeq - sequence : ", sequence);
  //   dispatch(incrementeSequence(sequence));
  // } // dispatch shortcut mapping
});

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
