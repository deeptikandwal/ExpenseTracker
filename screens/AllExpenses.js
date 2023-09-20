import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

function AllExpenses() {
    const expenseContext = useContext(ExpensesContext)
    return <ExpensesOutput expenses={expenseContext.expenses}
        expensesPeriod="Total" />
}

export default AllExpenses;