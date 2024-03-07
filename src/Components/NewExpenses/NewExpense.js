import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const processNewExpense = (newExpense) => {
    const expenseItem = {
      id: Math.random().toString(),
      ...newExpense,
    };
    props.sendDataToApp(expenseItem);
    setIsEditing(false);
  };
  const startEditingHandler = () => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm sendDataToNewExpense={processNewExpense} onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
