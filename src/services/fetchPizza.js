import pizzaData from "./pizzas.json"

export const fetchPizza = () => 
  new Promise(resolve => {
    setTimeout(() => resolve(pizzaData), 500);
  });

  export default fetchPizza;