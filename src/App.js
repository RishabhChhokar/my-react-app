import ExpenseItems from "./Components/ExpenseItems";

function App() {
  let expenses = [
    {
      date: new Date(2021, 4, 20),
      expenseItem: "Life Insurance",
      itemPrice: 240000,
      locationOfExpediture: "Utility",
    },
    {
      date: new Date(2021, 3, 24),
      expenseItem: "KFC Bucket",
      itemPrice: 700,
      locationOfExpediture: "Food and beverages",
    },
  ];
  return (
    <div>
      <ExpenseItems
        date={expenses[0].date}
        expenseItem={expenses[0].expenseItem}
        itemPrice={expenses[0].itemPrice}
        locationOfExpediture={expenses[0].locationOfExpediture}
      ></ExpenseItems>
      <ExpenseItems
        date={expenses[1].date}
        expenseItem={expenses[1].expenseItem}
        itemPrice={expenses[1].itemPrice}
        locationOfExpediture={expenses[1].locationOfExpediture}
      ></ExpenseItems>
    </div>
  );
}

export default App;
