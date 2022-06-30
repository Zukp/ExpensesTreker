import { useEffect,useState} from "react"
import { getAllQuotes} from "../../api/ExpensesService"
import useHttp from "../../hooks/useHttp"
import ExpensesRender from "./ExpensesRender"

const ExpensesId = (props) => {
  const {sendRequest,status,data:loaded,error} = useHttp(getAllQuotes,true)
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
 
  return (
      <div>
      
         <ExpensesRender expenses={loaded} />
      </div>
  )
}
export default ExpensesId