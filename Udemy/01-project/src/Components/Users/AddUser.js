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
      return [
        ...users,
        { id: Math.random().toString(), name: userName, age: userAge },
      ];
    });
    setUserAge('');
    setUserName('');
  };

  const [users, setUsers] = useState([
    { id: Math.random().toString(), name: "Felipe", age: 20 },
  ]);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const deleteItemHandler = (userId) => {
    setUsers(() => {
      const updatedUser = users.filter((user) => user.id !== userId);
      return updatedUser;
    });
  };

  return (
    <>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            value={userName}
            id="username"
            type="text"
            onChange={userNameChangeHandler}
          />
          <label htmlFor="userage">Age</label>
          <input
            value={userAge}
            id="userage"
            type="number"
            onChange={userAgeChangeHandler}
          />
          <button type="submit">Add User</button>
        </form>
      </Card>
      <div>
        {users.map((user) => (
          <User
            onDelete={deleteItemHandler}
            id={user.id}
            key={user.id}
            userName={user.name}
            userAge={user.age}
          />
        ))}
      </div>
    </>
  );
};

export default AddUser;
