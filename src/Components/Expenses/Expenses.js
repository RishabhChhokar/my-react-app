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

  let expensesContent = <p>No Expenses for year {filteredYear}</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item, index) => (
      <ExpenseItems
        key={item.id}
        id={item.id}
        date={item.date}
        expenseItem={item.expenseItem}
        itemPrice={item.itemPrice}
        locationOfEx
        penditure={item.locationOfExpenditure}
        // onDeletionOfExpense={onDeletionOfExpense}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
      {filteredExpenses.length===1 && (
        <p>Only single Expense here. Please add more....</p>
      )}
    </Card>
  );
};

export default Expenses;
