import pizzaData from "./pizzas.json"

export const fetchPizza = () => 
  new Promise(resolve => {
    setTimeout(() => resolve(pizzaData), 3000);
  });

  export default fetchPizza;