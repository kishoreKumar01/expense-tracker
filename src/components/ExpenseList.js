import React from "react";

function ExpenseList({ name, amount }) {
  let Amount = parseInt(amount,10);
  return (
    <div className={`income-list ${Amount<0? "expense-list" : ""}`}>
      <h4>{name}</h4>
      <h5> {Amount>0 ? "+" : "-"}{Amount}</h5>
    </div>
  );
}

export default ExpenseList;
