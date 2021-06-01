import { createStore, combineReducers } from "redux";
import homePage from "./Containers/Homepage/reducers";

const reducers = combineReducers({ homePage });

export default createStore(reducers);
