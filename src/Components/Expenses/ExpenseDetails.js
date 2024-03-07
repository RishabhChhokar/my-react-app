import "./ExpenseItems.css";
const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.expenseItem}</h2>
      <h3>Location :- {props.locationOfExpenditure}</h3>
      <div className="expense-item__price">₹{props.itemPrice}</div>
    </div>
  );
};

export default ExpenseDetails;
