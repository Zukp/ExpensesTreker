import {useEffect, useState } from 'react'
import {Switch,Route } from 'react-router-dom'
import { addQuote} from './api/ExpensesService'
import useHttp from './hooks/useHttp'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
import ExpensesId from './components/Expenses/ExpensesId'
import Layout from './container/Layout'
import './/components/Expenses/ExpenseList'
import './App.css'

function App() {
	
   const [errorState,setErrorState] = useState()
   const {sendRequest,status,error} = useHttp(addQuote)
   
   async function saveDataToList(newdata) {
    sendRequest(newdata)
	}
	useEffect(() => {
		if(status === 'completed' && !error) {
			setErrorState(error)
		 return
		}
		
	},[status,error])

	return (
		<div className='App'>
			<Layout>
			 <Switch>
				 <Route path="/expenses" exact>
				 <Expenses />
				 </Route>

                 <Route path="/expenses/:expensesId" exact>
				 <ExpensesId  />
				 </Route>

				 <Route path='/new-expenses'>
				 <NewExpense error={errorState} onSaveDataToList={saveDataToList} />
				 </Route>
			 </Switch>
			</Layout>
		</div>
	)
}
 
export default App
