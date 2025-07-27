import "./App.css";
import React, { useState, Fragment } from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;
