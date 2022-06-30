import { NavLink } from 'react-router-dom'
import classes from './NewExpensesForm.module.css'
const NewExpensesForm = () => {
    return (
       <header className={classes.header}>
           <div className={classes.logo}>Creat Quotes</div>
           <nav className={classes.nav}>
               <ul>
                   <li>
                       <NavLink to="/expenses" activeClassName={classes.active}>
                          All Quotes
                       </NavLink>
                   </li>
                   <li>
                       <NavLink to="/new-expenses" activeClassName={classes.active}>
                          New Quote 
                       </NavLink>
                   </li>
               </ul>
           </nav>
       </header>
    )

}
export default NewExpensesForm