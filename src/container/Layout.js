import NewExpensesForm from './NewExpensesForm';
import classes from './Layout.module.css';
const Layout = (props) => {

    return (
        <>
        <NewExpensesForm />
        <main className={classes.main}>{props.children}</main>
        </>
    )

}
export default Layout
