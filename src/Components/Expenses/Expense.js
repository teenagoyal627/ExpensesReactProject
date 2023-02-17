import React ,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseFilter from './ExpenseFilter';
import './ExpenseList.css'
import ExpenseChart from './ExpenseChart';
// import Chart from '../Chart/Chart';

const Expenses = (props) => {
  const [filteredYear ,setFilteredYear]=useState('2020');
  const filterChangeHandler =(selectedYear)=>
  {
      console.log("Expense.js");
      setFilteredYear(selectedYear);

  }
  const filteredExpenses =props.items.filter(expense =>
    {
      return expense.date.getFullYear().toString()===filteredYear;
    })
  return (
    <div> 
    <Card className="expenses">
    <ExpenseFilter  Selected ={filteredYear}
     onChangeFilter={filterChangeHandler}/>
         
         <ExpenseChart expenses ={filteredExpenses}/>
         
           {/* now if there is no expenses in a  particular year than give a message for this we write code here */}
       {/* for that in react we cannot use if and for is not allowed in react so for this we use ternary operator */}
            {filteredExpenses.length === 0 ? (
              <p className='expenses-list__fallback'>Found no expenses.</p>
              ):(          
                 filteredExpenses.map((expense)=>(
          <ExpenseItem
      key ={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
     ))
     )}
           {/* in this we use map map is use for just like looping map me se function pass hota hai jiska ek arungment hoga and kuch data pass hoga */}
  
      
     
    </Card>
    </div>

  );
}

export default Expenses;