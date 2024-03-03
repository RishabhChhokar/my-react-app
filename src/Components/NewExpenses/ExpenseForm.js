const ExpenseForm = () => {

    // const titleExpenseHandler = (event) => {
    //     console.log(event.target.value)
    // }
  return (
    <form>
      <div>
        <lable>Expense Title</lable>
        <input type="text" onChange={(event)=>console.log(event.target.value)} />
      </div>
      <div>
        <lable>Expense Amount</lable>
        <input type="Number" />
      </div>
      <div>
        <lable>Expense Date</lable>
        <input type="date" />
      </div>
      <div>
        <lable>Expense Location</lable>
        <input type="text" />
      </div>
      <div>
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
