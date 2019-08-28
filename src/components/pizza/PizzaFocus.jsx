import React, { Component } from "react";

function PizzaFocus(props) {
  console.log("props : ",props);
  return (
    <>
      <div>{props.match.params.nom} - la meilleure pizza batard</div>          
    </>
  );
}


export default PizzaFocus;
