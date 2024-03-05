import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  // const [expenseList, setExpenses] = useState(props.items);
  // const onDeletionOfExpense = (id) => {
  //   setExpenses((prevExpenses) =>
  //     prevExpenses.filter((expense) => expense.id !== id)
  //   );
  // };
  return (
    <Card className="expenses">
      {props.items.map((item, index) => (
        <ExpenseItems
          key={item.id}
          id={item.id}
          date={item.date}
          expenseItem={item.expenseItem}
          itemPrice={item.itemPrice}
          locationOfExpenditure={item.locationOfExpenditure}
          // onDeletionOfExpense={onDeletionOfExpense}
        />
      ))}
    </Card>
  );
};

export default Expenses;
