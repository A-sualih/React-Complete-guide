import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense.jsx";
import Expenses from "./components/expenses/Expenses.jsx";
const INITIAL_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2025, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2025, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2025, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2025, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_Expenses);
  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let Get Started"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <>
      <h2>Let Get Started</h2>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};
export default App;
