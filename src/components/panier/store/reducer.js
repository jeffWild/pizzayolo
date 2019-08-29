const initialState = {
  pizzaPanierList : [],
}

const panierReducer = (state, action) => {
  switch (action.type) {
    case "VIDER_PANIER":
      return { ...state, pizzaPanierList: initialState.pizzaPanierList };//au cas où on aurait différents types d'éléments dans le panier
    case "AJOUT_PANIER":
      return {...state, pizzaPanierList: [...state.pizzaPanierList, { id: action.id, nom: action.nom, prix: action.prix }]};
    default:
      return state;
  }
}

export default panierReducer;