import React, { useContext } from "react";
import { ExpenseContext } from "./ExpenseContext";

function Transactions() {
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

  // get the input text and store it on Text state
  const textInputHandler = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  // get the amount  and store it on Amount state
  const amountInputHandler = (e) => {
    console.log(e.target.value);
    setAmount(e.target.value);
  };
  // after pressing the submit button update it on Transactions state
  const submitHandler = (e) => {
    e.preventDefault();
    setTransactions([
      ...Transactions,
      { text: Text, amount: Amount, id: Math.floor(Math.random() * 1000) },
    ]);

    var amount = parseInt(Amount, 10);
    if (amount > 0) {
      if (Income !== 0) {
        setIncome(Income + amount);
        setBalance(Balance + amount);
      } else {
        setIncome(amount);
        setBalance(amount);
      }
    } else {
      amount = -amount;
      setExpense(Expense + amount);
      setBalance(Balance - amount);
    }

    console.log(Transactions);
  };

  return (
    <div className="transactions-wrapper">
      <h3 className="transactions-tittle">Add new Transactions</h3>
      <form className="form" onSubmit={submitHandler}>
        <h4>Text</h4>
        <input
          className="transaction-type"
          placeholder="Enter the text..."
          autoComplete="off"
          type="text"
          name="name"
          onChange={textInputHandler}
          value={Text}
        />
        <h4>Amount</h4>
        <p>(negative-expense, positive-income)</p>
        <input
          className="expense-amount"
          placeholder="Enter amount..."
          name="name"
          autoComplete="off"
          type="number"
          onChange={amountInputHandler}
          value={Amount}
        />
        <button className="submit-btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default Transactions;
