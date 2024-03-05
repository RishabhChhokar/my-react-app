import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
  // const deleteExpenseHandler = () => {
  //   props.onDeletionOfExpense(props.id);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        expenseItem={props.expenseItem}
        locationOfExpenditure={props.locationOfExpenditure}
        itemPrice={props.itemPrice}
      />
      {/* <button onClick={deleteExpenseHandler}>Delete Expense</button> */}
    </Card>
  );
};

export default ExpenseItems;
