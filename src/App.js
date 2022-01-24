import logo from "./logo.svg";
import ExpenseItem from "./componemts/ExpenseItem";
import "./App.css";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Inventory List</h2>
      {expenses.map((item, index) => {
        return <ExpenseItem item={item} key={index}></ExpenseItem>;
      })}
    </div>
  );
}

export default App;
