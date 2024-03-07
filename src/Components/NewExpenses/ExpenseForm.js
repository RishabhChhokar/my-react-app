import React, { useState } from "react";
import "./ExpenseForm.css"
const ExpenseForm = (props) => {
  const [enteredTitle, expenseTitleChange] = useState("");
  const [enteredAmount, expenseAmountChange] = useState("");
  const [enteredDate, expenseDateChange] = useState("");
  const [enteredLocation, expenseLocationChange] = useState("");
  const titleChangeHandler = (event) => {
    expenseTitleChange(event.target.value);
  };

  const amountChangeHandler = (event) => {
    expenseAmountChange(event.target.value);
  };

  const dateChangeHandler = (event) => {
    expenseDateChange(event.target.value);
  };

  const locationChangeHandler = (event) => {
    expenseLocationChange(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpenseItem = {
      date: new Date(enteredDate),
      expenseItem: enteredTitle,
      itemPrice: enteredAmount,
      locationOfExpenditure: enteredLocation,
    };
    props.sendDataToNewExpense(newExpenseItem);
    expenseTitleChange("");
    expenseAmountChange("");
    expenseDateChange("");
    expenseLocationChange("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
      <div div className="new-expense__control">
        <label>Expense Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Expense Amount</label>
        <input
          type="Number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Expense Date</label>
        <input
          type="date"
          min="2021-01-01"
          max="2024-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Expense Location</label>
        <input
          type="text"
          value={enteredLocation}
          onChange={locationChangeHandler}
        />
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="Submit">Add Expense</button>
      </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
