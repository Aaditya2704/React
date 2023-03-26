import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css";
export default function ExpensesList(props) {
  if (props.items.length === 0)
    return <p className="expenses-list__fallback ">Found No Expenses</p>;

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
