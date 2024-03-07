import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  // const [expenseList, setExpenses] = useState(props.items);
  // const onDeletionOfExpense = (id) => {
  //   setExpenses((prevExpenses) =>
  //     prevExpenses.filter((expense) => expense.id !== id)
  //   );
  // };
  let filteredExpenses;
  const [filteredYear, setFilteredYear] = useState("All years");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  if (filteredYear !== "All years") {
    filteredExpenses = props.items.filter(
      (item) => item.date.getFullYear() === parseInt(filteredYear)
    );
  } else {
    filteredExpenses = props.items;
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList year={filteredYear} items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
