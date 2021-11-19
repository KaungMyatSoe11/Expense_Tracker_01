import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import { ExpenseList } from "./ExpenseList";
import { ExpenseChart } from "./ExpenseChart";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  const filterExpense = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseChart expenses={filterExpense} />
      <ExpenseList item={filterExpense} />
    </Card>
  );
};

export default Expense;
