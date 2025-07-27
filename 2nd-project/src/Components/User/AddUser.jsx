import Card from "../UI/Card";
import React, { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    const enterdUsername = nameInputRef.current.value;
    const enterdAge = ageInputRef.current.value;
    console.log(ageInputRef.current.value);
    console.log(nameInputRef.current.value);
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please Enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "invalid age",
        message: "please Enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enterdUsername, enterdAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    ageInputRef();
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
