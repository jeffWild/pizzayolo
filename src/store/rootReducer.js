import {combineReducers} from "redux";
import panierReducer from "../components/panier/store/panierReducer";
import pizzaReducer from "../components/pizza/store/pizzaReducer";

const rootReducer = combineReducers({
  panierReducer,
  pizzaReducer
});

export default rootReducer;