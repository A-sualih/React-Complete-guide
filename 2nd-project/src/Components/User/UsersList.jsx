import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";
export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old )
          </li>
        ))}
      </ul>
    </Card>
  );
}
