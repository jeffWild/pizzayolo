const initialState = {
  pizzaPanierList : [],
  sequence: 0
}

const panierReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIDER_PANIER":
      return { ...state, pizzaPanierList: initialState.pizzaPanierList };//au cas où on aurait différents types d'éléments dans le panier
    case "AJOUT_PANIER":
      return {...state, pizzaPanierList: [...state.pizzaPanierList, { id: action.id, nom: action.nom, prix: action.prix }]};
    case "INCR_SEQUENCE":
      console.log("INCR_SEQUENCE sequence ", action.sequence);
      return {...state, sequence: action.sequence + 1};
    //case "ENLEVER_PANIER":
      //return {...state, pizzaPanierList: [...state.pizzaPanierList, { id: action.id, nom: action.nom, prix: action.prix }]};  
    default:
      return state;
  }
}

export default panierReducer;