import ExpenseItems from "./ExpenseItems";
import './ExpensesList.css'
const ExpensesList = (props) => {
  if (props.items.length === 0)
    return <h2 className='expense_issues'>No Expenses for year {props.year}</h2>;

  return (
    <ul>
      {props.items.map((item, index) => (
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
      ))}
      {props.items.length === 1 && (
        <h2 className="expense_issues">Expense List length is too short please add more items.</h2>
      )}
    </ul>
  );
};
export default ExpensesList;
