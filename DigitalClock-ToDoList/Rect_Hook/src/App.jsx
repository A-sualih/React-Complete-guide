import { useState } from "react";
import TodoList from "./assets/Components/ToDoList/TodoList";
import DigitalClock from "./Components/UseEffect/DigitalClock";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <DigitalClock />
        <TodoList />
      </div>
    </>
  );
}
export default App;
