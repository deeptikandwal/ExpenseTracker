import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStlyes";

function ExpensesSummary({ periodName, expenses }) {

    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0.0)

    return(<View style={styles.container}>
        <Text style={styles.period}>{periodName}</Text>
        <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>)
}


export default ExpensesSummary;
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius:8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: GlobalStyles.colors.primary100,
        alignItems: 'center'
    },
    period: {
        fontSize: 16,
        fontWeight:'500',
        color:GlobalStyles.colors.black
    },
    sum: {
        fontSize: 16,
        color: GlobalStyles.colors.black
    }
});