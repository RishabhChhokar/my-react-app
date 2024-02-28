import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.expenseItem}</h2>
        <h3>Expense on :- {props.locationOfExpediture}</h3>
        <div className="expense-item__price">₹{props.itemPrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItems;