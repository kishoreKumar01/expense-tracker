import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "./ExpenseContext";

function StatusBar() {
  const [
    Text,
    setText,
    Amount,
    setAmount,
    Transactions,
    setTransactions,
    Income,
    setIncome,
    Balance,
    setBalance,
    Expense,
    setExpense,
  ] = useContext(ExpenseContext);

  return (
    <div className="bar-wrapper">
      <div className="balance-bar">
        <h6>YOUR BALANCE</h6>
        <h2> &#8377; {Balance}</h2>
      </div>
      <div className="status-bar">
        <span className="income-bar">
          <h5>Income</h5>
          <h2> &#8377;{Income}</h2>
        </span>
        <span className="expense-bar">
          <h5>Expense</h5>
          <h2> &#8377; {Expense}</h2>
        </span>
      </div>
    </div>
  );
}

export default StatusBar;
