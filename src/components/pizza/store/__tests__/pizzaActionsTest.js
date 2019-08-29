import {setPizzaList} from "../pizzaActions"

test("returns add pizza action", () => {
  expect(setPizzaList()).toEqual(
    {type: "SET_PIZZA_LIST"}
  )
});

test("returns add pizza action with pizzas", () => {
  const fakePizzas = [
    {nom:"pizza1", prix:"10"},
    {nom:"pizza2", prix:"12"}
  ]
  expect(setPizzaList(fakePizzas)).toEqual(
    {
      type: "SET_PIZZA_LIST",
      pizzaList: fakePizzas
    }
  )
});
