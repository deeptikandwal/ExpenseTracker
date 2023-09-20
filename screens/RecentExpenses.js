import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/DateUtil";
import { useContext, useEffect, useState} from "react";
import { fetchExpenses } from "../util/https";

function RecentExpenses() {
    const expenseContext = useContext(ExpensesContext);
    useEffect(() => {
        async function getExpenses() {
           const expenses= await fetchExpenses()
           expenseContext.setExpenses(expenses)
        }

        getExpenses();
    }, [])
    const recentExpenses = expenseContext.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expense.date >= date7DaysAgo && expense.date <= today;
    });


    return <ExpensesOutput expenses={recentExpenses}
        expensesPeriod="Last 7 days" />
}

export default RecentExpenses;