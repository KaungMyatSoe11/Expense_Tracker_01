import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };

  const filterExpense = props.expenses.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No Data</p>;

  if (filterExpense.length > 0) {
    expenseContent =
      filterExpense &&
      filterExpense.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {filterExpense.length === 0 && expenseContent}
      {filterExpense.length > 0 && expenseContent}
    </Card>
  );
};

export default Expense;
