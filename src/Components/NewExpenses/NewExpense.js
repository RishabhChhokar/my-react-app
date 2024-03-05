import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const processNewExpense = (newExpense) => {
    const expenseItem = {
        id: Math.random().toString(),
      ...newExpense, 
    };
    props.sendDataToApp(expenseItem);
  };
  return <ExpenseForm sendDataToNewExpense={processNewExpense} />;
};

export default NewExpense;
