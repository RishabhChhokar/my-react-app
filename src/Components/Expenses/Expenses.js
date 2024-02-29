import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItems
        date={props.items[0].date}
        expenseItem={props.items[0].expenseItem}
        itemPrice={props.items[0].itemPrice}
        locationOfExpenditure={props.items[0].locationOfExpenditure}
      />
      <ExpenseItems
        date={props.items[1].date}
        expenseItem={props.items[1].expenseItem}
        itemPrice={props.items[1].itemPrice}
        locationOfExpenditure={props.items[1].locationOfExpenditure}
      ></ExpenseItems>
    </Card>
  );
}
export default Expenses;
