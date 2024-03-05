import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const processNewExpense = (newExpense) => {
    const expenseItem = {
      ...newExpense,
      id: Math.random().toString(),
    };
    props.sendDataToApp(expenseItem);
  };
  return <ExpenseForm sendDataToNewExpense={processNewExpense} />;
};

export default NewExpense;
