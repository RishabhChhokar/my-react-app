import React, { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  // const [expenseList, setExpenses] = useState(props.items);
  // const onDeletionOfExpense = (id) => {
  //   setExpenses((prevExpenses) =>
  //     prevExpenses.filter((expense) => expense.id !== id)
  //   );
  // };
  let yearlyFilteredExpenses;
  const [filteredYear, setFilteredYear] = useState("All years");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  if (filteredYear !== "All years") {
    yearlyFilteredExpenses = props.items.filter(
      (item) => item.date.getFullYear() === parseInt(filteredYear)
    );
  } else {
    yearlyFilteredExpenses = props.items;
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {yearlyFilteredExpenses.map((item, index) => (
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
