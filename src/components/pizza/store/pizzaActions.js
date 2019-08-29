export const setPizzaList = (pizzaList) => (
  {
    type: "SET_PIZZA_LIST",
    pizzaList: pizzaList // pas de convention de nom
  }
);

export const incrementeSequence = (sequence) => (
  {
    type: "INCR_SEQUENCE",
    sequence: sequence
  }
);