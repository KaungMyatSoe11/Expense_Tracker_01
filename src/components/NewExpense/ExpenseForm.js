import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterDate, setEnterDate] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const handleChange = (e) => {
    setEnterTitle(e.target.value);
  };

  const amountChangehandle = (e) => {
    setEnterAmount(e.target.value);
  };

  const dateChangehandle = (e) => {
    setEnterDate(e.target.value);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const userData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    console.log(userData);
    props.onSaveExpenseData(userData);
    setEnterAmount("");
    setEnterDate("");
    setEnterTitle("");
  };
  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={handleChange} value={enterTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangehandle}
            value={enterAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangehandle}
            value={enterDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
