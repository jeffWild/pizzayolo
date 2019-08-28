import pizzaData from "./pizzas.json"
import reine from "./reine.json"

export const fetchPizza = () => 
  new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(pizzaData);
      //reject(pizzaData);
    }, 500);
  });

  export const fetchPizzaByName = (nom) => 
  new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(`${nom}`);
      //reject(pizzaData);
    }, 500);
  });