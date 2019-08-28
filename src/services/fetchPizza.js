import pizzaData from "./pizzas.json"

export const fetchPizza = () => 
  new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(pizzaData);
      //reject(pizzaData);
    }, 500);
  });

  export default fetchPizza;