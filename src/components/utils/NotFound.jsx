import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Mais où allez vous ?</h1>
      <p>il n'y a rien par ici, revenez plutôt là --> <Link to="/">Accueil</Link></p>
    </>
  );
}
