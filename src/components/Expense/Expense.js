import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.expenses &&
        props.expenses.map((item, index) => (
          <ExpenseItem
            key={index}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      {/* <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expense;
