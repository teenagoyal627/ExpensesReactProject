import Expenses from "./Components/Expenses/Expense";
import React, { useState } from "react";
import './Components/Expenses/Expense.css'
import NewExpense from "./Components/NewExpense/NewExpense";
const DUMMY_EXPENSES  = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2018, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2015, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2017, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2016, 5, 12),
  },
];
function App() {
  const [expenses,setExpenses]=  useState(DUMMY_EXPENSES);
  // const [expenses,setExpenses]=  useState("");

  const addExpenseHandler= expense  =>{
    //yha appexpense expenseData me joo data aayega usko receive karega.
   setExpenses(prevExpenses=>
   {
    return [expense , ...prevExpenses];
   });
  //for update the expenses meand add dynamic data

}
  return(
   <div>
   
   <NewExpense onAddExpense ={addExpenseHandler}/>
      <Expenses items ={expenses}/>
    </div>
  );
}
export default App;