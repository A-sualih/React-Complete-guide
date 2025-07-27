import React, { useState } from "react";
import "./TodoList.css";
export default function TodoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    " walk The Hors",
  ]);
  const [newTask, setNewTasks] = useState("");
  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((prevState) => [...tasks, newTask]);
      setNewTasks("");
    }
  }
  function deleteTask(index) {
    const updateTasks = tasks.filter((element, i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }
  return (
    <div className="to-do-list">
      <h1>To-Do-List </h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ✌️
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              🤞
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
