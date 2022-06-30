import React, { useState } from 'react'
import { Prompt } from 'react-router-dom'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
	const [isExpenses,setIsExpenses] = useState()
	const [enteredTitle, setEnteredTitle] = useState('')
	const [enteredAmount, setEnteredAmout] = useState('')

	const [enteredDate, setEnteredDate] = useState('')

	const titleHandler = (e) => {
		setEnteredTitle(e.target.value)
	}

	const amountHandler = (e) => {
		setEnteredAmout(e.target.value)
	}
	const dateHandler = (e) => {
		setEnteredDate(e.target.value)
	}

	const submitHanlder = (e) => {
		e.preventDefault()
        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
   
        }
		props.onSaveData(expenseData)
	}
	const ExpensesPrompt = () => {
      setIsExpenses(true)
	}

	return (
		<>
		<Prompt when={isExpenses} message={() => 'Are you text'} />
		{props.error && <p style={{color:'red'}}>{props.error}</p>}
		<form 
		onFocus={ExpensesPrompt}
		onSubmit={submitHanlder}
		>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>title</label>
					<input
						type='text'
						value={enteredTitle}
						onChange={titleHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>amount</label>
					<input
						value={enteredAmount}
						type='number'
						onChange={amountHandler}
						min='0.01'
						step='0.01'
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						onChange={dateHandler}
						type='date'
						value={enteredDate}
						min='2000-01-01'
						max='2023-01-01'
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button  type='submit'>Add Expense</button>
			</div>
		</form>
		</>
	)
}

export default ExpenseForm
