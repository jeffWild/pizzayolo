import React, { Component } from "react";

function Chargement() {
    return (
      <>
        <div class="column is-10-desktop is-12-tablet">
          <h1 class="title is-h1 has-text-centered is-italic">
            Réchauffage des pizzas, veuillez patienter
          </h1>
          <progress class="progress is-large is-primary" max="100">
            60%
          </progress>
        </div>
      </>
    );
}

export default Chargement;
