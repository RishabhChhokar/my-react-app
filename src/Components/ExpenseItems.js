import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        expenseItem={props.expenseItem}
        locationOfExpenditure={props.locationOfExpenditure}
        itemPrice={props.itemPrice}
      />
    </div>
  );
};

export default ExpenseItems;
