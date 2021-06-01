import { ActionTypes } from "./constants";

const defaultState = {
  user: null,
};

export default function userPageReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      //make sure to use spread operator to provide old "state" and then updated state
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
