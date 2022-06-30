import React, { useEffect, useState } from 'react'
import { getAllQuotes } from '../../api/ExpensesService'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart'
import useHttp from '../../hooks/useHttp'
import './Expenses.css'

const Expenses = (props) => {
	const {sendRequest,status,data:loaded,error} = useHttp(getAllQuotes,true)
	const [filteredYear, setfilteredYear] = useState('2022')

	
   console.log(loaded)
   useEffect(() => {
	   sendRequest()
   },[])
   if(status === 'pending'){
	   return (
		   <div>
			   Not Found
		   </div>
	   )
   }
   if(error === 'completed' && (!loaded || loaded.length === 0)){
	   return <p>{error}</p>
   }
	const filterChangeHandler = (selectedYear) => {
		setfilteredYear(selectedYear)
	}

	const filteredExpenses = loaded.filter((expense) => {
		console.log(expense.date)
		return expense.date.getFullYear().toString() === filteredYear
	}) 
	return (
		<Card className='expenses'>
			<ExpensesFilter onChangeFilter={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses}/>
			{filteredExpenses.length === 0 ? (
				<p>No expense Found</p>
			) : (
				filteredExpenses.map((el) => (
					<ExpenseItem
						key={el.id}
						id={el.id}
						date={el.date}
						title={el.title}
						price={el.amount}
					/>
				))
			)}
			
		</Card>
	)
}

export default Expenses
