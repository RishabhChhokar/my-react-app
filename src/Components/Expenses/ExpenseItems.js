import React from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";
const ExpenseItems = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          expenseItem={props.expenseItem}
          locationOfExpenditure={props.locationOfExpenditure}
          itemPrice={props.itemPrice}
        />
      </Card>
    </li>
  );
};

export default ExpenseItems;
