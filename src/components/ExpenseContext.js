import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = (props) => {
  const [Text, setText] = useState("");
  const [Amount, setAmount] = useState("");
  const [Transactions, setTransactions] = useState([]);
  const [Income, setIncome] = useState(0);
  const [Balance, setBalance] = useState(0);
  const [Expense, setExpense] = useState(0);


  return (
    <ExpenseContext.Provider
      value={[
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
      ]}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};
