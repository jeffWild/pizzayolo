import rootReducer from "./rootReducer";
import {createStore} from "redux";

const loadState = () => {
  const state = localStorage.getItem("pizzaYoloStore");
  if (!state) {
    return undefined;
  }
  return JSON.parse(state);
};

const saveState = state => {
  const jsonState = JSON.stringify(state);
  localStorage.setItem("pizzaYoloStore",jsonState);
};

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  saveState(store.getState());
});  

export default store;