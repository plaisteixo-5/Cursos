import React, { useState } from "react";

import Card from "../UI/Card";
import User from "./User";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    setUsers((user) => {
      return [...users, { name: userName, age: userAge }];
    });
  };

  const [users, setUsers] = useState([{ name: "Felipe", age: 20 }]);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" onChange={userNameChangeHandler} />
          <label htmlFor="userage">Age</label>
          <input id="userage" type="number" onChange={userAgeChangeHandler} />
          <button type="submit">Add User</button>
        </form>
      </Card>
      <div>
        {users.map((user) => (
          <User userName={user.name} userAge={user.age} />
        ))}
      </div>
    </>
  );
};

export default AddUser;
