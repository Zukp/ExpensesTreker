import React from 'react';
import { useHistory } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
function NewExpense (props){
    const history = useHistory()
    function saveData(data) {
        history.push('/expenses')
        const objectWithId = {
            ...data,
            id: Math.random().toString(),
        }
        props.onSaveDataToList(objectWithId)
    };
    return (
        <div className='new-expense'>
            <ExpenseForm error={props.error} onSaveData={saveData}/>
        </div>
    )
}

export default NewExpense;