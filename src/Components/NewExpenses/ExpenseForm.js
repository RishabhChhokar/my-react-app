import React, { useState } from "react";
const ExpenseForm = () => {
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
  return (
    <form>
      <div>
        <lable>Expense Title</lable>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <lable>Expense Amount</lable>
        <input type="Number" onChange={amountChangeHandler} />
      </div>
      <div>
        <lable>Expense Date</lable>
        <input type="date" onChange={dateChangeHandler} />
      </div>
      <div>
        <lable>Expense Location</lable>
        <input type="text" onChange={locationChangeHandler} />
      </div>
      <div>
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
