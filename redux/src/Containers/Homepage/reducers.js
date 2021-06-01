import { ActionTypes } from "./constants";

const defaultState = {
  users: [],
};

export default function homePageReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      //make sure to use spread operator to provide old "state" and then updated state
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
