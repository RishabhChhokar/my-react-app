import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpenses/NewExpense";
const App = () => {
  let expenses = [
    {
      id: 1,
      date: new Date(2023, 4, 20),
      expenseItem: "Life Insurance",
      itemPrice: 240000,
      locationOfExpenditure: "Bank",
    },
    {
      id: 2,
      date: new Date(2023, 3, 24),
      expenseItem: "KFC Bucket",
      itemPrice: 700,
      locationOfExpenditure: "KFC restaurant",
    },
    {
      id: 3,
      date: new Date(2023, 6, 25),
      expenseItem: "Groceries",
      itemPrice: 150,
      locationOfExpenditure: "Central market",
    },
    {
      id: 4,
      date: new Date(2023, 3, 29),
      expenseItem: "Office Chair",
      itemPrice: 2500,
      locationOfExpenditure: "New Town Store",
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
