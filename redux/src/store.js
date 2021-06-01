import { createStore, combineReducers } from "redux";
import homePage from "./Containers/Homepage/reducers";
import userPage from "./Containers/UserPage/reducer";

const reducers = combineReducers({ homePage, userPage });

export default createStore(reducers);
