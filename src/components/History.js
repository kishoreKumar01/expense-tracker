import React, { useContext } from "react";
import ExpenseList from "./ExpenseList";
import { ExpenseContext } from "./ExpenseContext";

function History() {
  const [
    Text,
    setText,
    Amount,
    setAmount,
    Transactions,
    setTransactions,
  ] = useContext(ExpenseContext);
  return (
    <div>
      <div className="history-wrapper">
        <h3 className="history-tittle"> History </h3>
      </div>
      <div>
        {Transactions.map((item) => (
          <ExpenseList key={item.id} name={item.text} amount={item.amount} />
        ))}
      </div>
    </div>
  );
}

export default History;
