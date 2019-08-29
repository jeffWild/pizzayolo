import {combineReducers} from "redux";
import panierReducer from "../components/panier/store/panierReducer";

const rootReducer = combineReducers({
  panierReducer
});

export default rootReducer;