import React from "react";
import PizzaPanier from "./PizzaPanier";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { viderPanier } from "./store/panierActions";

export function Panier ({ pizzaPanierList, videPanier, history, enleverPanier }) {

  const payer = () => {
    history.push('/paiement');
  };
  
  return (
    <>
      <h2 className="title is-h2">Mon Panier</h2>
      {pizzaPanierList.map((pizzaPanier) => (
          <ul key={pizzaPanier.id}>
              <PizzaPanier 
              nom={pizzaPanier.nom} 
              prix={pizzaPanier.prix} 
              id={pizzaPanier.id} 
              enleverPanier={enleverPanier}/>
              {/* <Pizza {...pizza}/> --> déstructuré : s'occuper lui même d'attribuer chaque proprs*/}
            </ul>
        ))}
      <hr />
      <p>
        <b>{`Nombre de pizzas : ${pizzaPanierList.length}`}</b>
        <br />
        <b>{`Total: ${pizzaPanierList.reduce((total, pizzaPanier) => {
                  return total + pizzaPanier.prix;
                }, 0)} €`}
        </b>
      </p>
      <br />
      <button className="button is-warning" onClick={() => {
        var result = confirm("Etes-vous sûr de vouloir vider le panier ?");
        if (result) {
          videPanier()
        }}}>Vider le panier</button>
      <button className="button is-success" onClick={payer}>Payer</button>
    </>
  );
}

const mapStateToProps = state => {
 return {pizzaPanierList: state.panierReducer.pizzaPanierList} // retrieve pizza list from the store, map it to 'pizzas' prop
};

const mapDispatchToProps = dispatch => ({
   // dispatch shortcut mapping
  videPanier: () => {
    dispatch(viderPanier())
  }
});

//export default connect(mapStateToProps, mapDispatchToProps)(Panier);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Panier));
