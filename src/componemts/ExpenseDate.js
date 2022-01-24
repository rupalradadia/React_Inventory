import "./ExpenseDate.css"

function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();

  return (
    <div className="e_date">
      <div className="e_month">{month}</div>
      <div className="e_year">{year}</div>
      <div className="e_day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
