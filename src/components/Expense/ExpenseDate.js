import expenseDate from "./ExpenseDate.module.css";

export const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={expenseDate.expense_date}>
      <div className={expenseDate.expense_date__day}>{day}</div>
      <div className={expenseDate.expense_date__month}>{month}</div>
      <div className={expenseDate.expense_date__year}>{year}</div>
    </div>
  );
};
