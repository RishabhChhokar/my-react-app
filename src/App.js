import Expenses from "./Components/Expenses/Expenses";
const App = () => {
  let expenses = [
    {
      date: new Date(2023, 4, 20),
      expenseItem: "Life Insurance",
      itemPrice: 240000,
      locationOfExpenditure: "Bank",
    },
    {
      date: new Date(2023, 3, 24),
      expenseItem: "KFC Bucket",
      itemPrice: 700,
      locationOfExpenditure: "KFC restaurant",
    },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
