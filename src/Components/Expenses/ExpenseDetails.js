import "./ExpenseItems.css";
import React, { useState } from "react";
const ExpenseDetails = (props) => {
  const [expenseTitle, setExpenseTitle] = useState(props.expenseItem);
  const editExpenseHandler = () => {
    setExpenseTitle("New Name");
    console.log(expenseTitle)
  };
  return (
    <div className="expense-item__description">
      <h2>{expenseTitle}</h2>
      <h3>Location :- {props.locationOfExpenditure}</h3>
      <div className="expense-item__price">₹{props.itemPrice}</div>
      <button onClick={editExpenseHandler}>Edit</button>
    </div>
  );
};

export default ExpenseDetails;
