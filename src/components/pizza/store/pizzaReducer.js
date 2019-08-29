const initialState = {
  pizzaList : []
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_LIST":
      return {...state, pizzaList:action.pizzaList};
    default:
      return state;
  }
}

export default pizzaReducer;