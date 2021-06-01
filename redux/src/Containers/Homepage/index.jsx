import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import Axios from "axios";

const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

export function HomePage(props) {
  const { users } = useSelector(stateSelector);

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
      }
    );
  };
  return <div>Hello React</div>;
}
