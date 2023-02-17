import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense =(props) =>
{
  const [isEditing,setIsEditing]=useState(false);
  const startEditingHandler =() =>
  {
    setIsEditing(true);
  }
  const cancleHandler =() =>
  {
     setIsEditing(false); 
  }
   const saveExpenseDataHandler=(enteredExpenseData)=>
  {
      const expenseData ={
                 ...enteredExpenseData,
                 //yha ...enteredExpenseData isliye likha hai kuki expense.js me maine expensedata karke function banya tha toh joo bhi use title .anount,date hai voo sab is enteredExpenseData me copy ho jayega .iso spred karna kahte hai.
                 id:Math.random().toString()
                 //math.random,tostring means joo bhi values enteredExpenseDate me aa rhi hai usko ye string me convert kar dega enteredExpenseDate me sabhi values syring ki form me copy ho rhai hai toh hum unko sabhi ko ek new key me store kar rhe hai and voo key math.random.tostring hai
                 //we use it to generate the same value twice
      };
props.onAddExpense(expenseData);
setIsEditing(false);
  }
      return(
        <div className="new-expense">
         {! isEditing &&
          <button onClick={startEditingHandler}>
          Add New Expense</button>}
         
        {isEditing&& (
          <ExpenseForm   
          onSaveExpenseData ={saveExpenseDataHandler}
           onCancle ={cancleHandler} 
          />)}
        </div>
      )
};
export default NewExpense;