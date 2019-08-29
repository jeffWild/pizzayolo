const initialState = {
  pizzaList : [],
  sequence: 0
}

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZA_LIST":
      return {...state, pizzaList:action.pizzaList};
    case "INCR_SEQUENCE":
      return {...state, sequence: action.sequence + 1};
    default:
      return state;
  }
}

export default pizzaReducer;