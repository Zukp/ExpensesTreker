import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"

const ExpensesRender = (props) => {
 const {expensesId} = useParams()
 const sorted = props.expenses.filter(item => item.id === expensesId )

    return (
        <Card className="expenses">
            <ul>
               {sorted.map((item)=> {
                 return (
                 <div className="expense-item" key={item.id}>
                  <ExpenseDate date={item.date} />
                    <div className='expense-item__description'>
                        <h2>{item.title}</h2>
                        <div className='expense-item__price'>{item.amount}</div>
                    </div>
                </div> 
                )
             })}
           </ul>
        </Card>
    
    )

}
export default ExpensesRender
