import React, { Component } from "react";
import PropTypes from "prop-types";

function PizzaPanier ({nom,prix}) {
    return (
      <>
        <div>
          {nom} <b>{prix}</b>
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