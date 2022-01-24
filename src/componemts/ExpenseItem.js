import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="e_item">
      <ExpenseDate date={props.item.date}></ExpenseDate>
      <div className="e_desc">
        <h2>{props.item.title}</h2>
      </div>
      <div className="e_item__price">{props.item.amount}</div>
    </div>
  );
}

export default ExpenseItem;
