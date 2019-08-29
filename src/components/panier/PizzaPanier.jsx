import React from "react";
import PropTypes from "prop-types";

function PizzaPanier ({id, nom, prix, enleverPanier}) {
    return (
      <>
        <div>
        <button className="button is-danger" onClick={() => enleverPanier({id, nom, prix, enleverPanier})}>x</button>{nom} <b>{prix}</b>
        </div>
      </>
    );
}

PizzaPanier.defaultProps = {
  nom: "ceciestunepizza"
};

PizzaPanier.propTypes = {
  prix: PropTypes.number.isRequired
};

export default PizzaPanier;