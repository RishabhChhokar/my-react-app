import ExpenseItems from "./Components/ExpenseItems";

function App() {
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
      <ExpenseItems
        date={expenses[0].date}
        expenseItem={expenses[0].expenseItem}
        itemPrice={expenses[0].itemPrice}
        locationOfExpenditure={expenses[0].locationOfExpenditure}
      />
      <ExpenseItems
        date={expenses[1].date}
        expenseItem={expenses[1].expenseItem}
        itemPrice={expenses[1].itemPrice}
        locationOfExpenditure={expenses[1].locationOfExpenditure}
      ></ExpenseItems>
    </div>
  );
}

export default App;
