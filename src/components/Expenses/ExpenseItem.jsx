import { Link } from 'react-router-dom'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props){

	return (
		<div className="expense-item">
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{props.title}</h2>
					<div className='expense-item__price'>{props.price}</div>
					<Link className='btn' to={`/expenses/${props.id}`}>View Fullscreen</Link>
				</div>
		</div>
	)
}

export default ExpenseItem
