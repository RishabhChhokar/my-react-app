import React, { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, expenseTitleChange] = useState("");
  const [enteredAmount, expenseAmountChange] = useState("");
  const [enteredDate, expenseDateChange] = useState("");
  const [enteredLocation, expenseLocationChange] = useState("");

  // const [userInput,setUserInput] = useState({
  //   enteredTitle : '',
  //   enteredAmount : '',
  //   enteredDate : '',
  //   enteredLocation : ''
  // })
  const titleChangeHandler = (event) => {
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle:event.target.value};
    // })
    // setUserInput({
    //   ...userInput,
    //   enteredTitle : event.target.value
    // })
    expenseTitleChange(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredAmount : event.target.value
    // })
    expenseAmountChange(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    // })
    expenseDateChange(event.target.value);
  };

  const locationChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredLocation : event.target.value
    // })
    expenseLocationChange(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let newExpenseItem = { enteredTitle, enteredAmount, enteredDate, enteredLocation }
    console.log(newExpenseItem);
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Expense Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Expense Amount</label>
        <input type="Number" onChange={amountChangeHandler} />
      </div>
      <div>
        <label>Expense Date</label>
        <input type="date" onChange={dateChangeHandler} />
      </div>
      <div>
        <label>Expense Location</label>
        <input type="text" onChange={locationChangeHandler} />
      </div>
      <div>
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
