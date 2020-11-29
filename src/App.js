import React, { useEffect } from 'react';
import "./App.css";
import History from "./components/History";
import StatusBar from "./components/StatusBar";
import Transactions from "./components/Transactions";
import {ExpenseProvider} from "./components/ExpenseContext";

function App() {

useEffect(()=>{
  console.log("It works");
} , []);

  return (
    <ExpenseProvider>
      <div className="app-container">
        <h3 className="tittle">Expense Tracker</h3>
        <StatusBar />
        <Transactions />
        <History />
      </div>
    </ExpenseProvider>
  );
}

export default App;
