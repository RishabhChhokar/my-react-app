import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
import React, { useState } from "react";
const Dummy_Data = [
  {
    id: Math.random().toString(),
    date: new Date(2023, 4, 20),
    expenseItem: "Life Insurance",
    itemPrice: 240000,
    locationOfExpenditure: "Bank",
  },
  {
    id: Math.random().toString(),
    date: new Date(2023, 3, 24),
    expenseItem: "KFC Bucket",
    itemPrice: 700,
    locationOfExpenditure: "KFC restaurant",
  },
  {
    id: Math.random().toString(),
    date: new Date(2023, 6, 25),
    expenseItem: "Groceries",
    itemPrice: 150,
    locationOfExpenditure: "Central market",
  },
  {
    id: Math.random().toString(),
    date: new Date(2023, 3, 29),
    expenseItem: "Office Chair",
    itemPrice: 2500,
    locationOfExpenditure: "New Town Store",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);
  const addNewExpenseItem = (newExpense) => {
    setExpenses((PrevExpenses) => {
      return [newExpense, ...PrevExpenses];
    });
  };

  return (
    <div>
      <NewExpense sendDataToApp={addNewExpenseItem} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
