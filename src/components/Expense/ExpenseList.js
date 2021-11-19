import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">Not Found Data</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map((data) => (
        <ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />
      ))}
    </ul>
  );
};
