import {combineReducers} from "redux";
import {panierReducer} from "../components/panier/store/reducer";

const rootReducer = combineReducers({
  panierReducer
});

export default rootReducer