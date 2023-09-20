
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/GlobalStlyes";


function ExpensesOutput({expenses,expensesPeriod}){
return <View style={styles.container}>
   <ExpensesSummary expenses={expenses}
    periodName={expensesPeriod}/>
   <ExpensesList expenses={expenses}/>
</View>
}

export default ExpensesOutput;

const styles=StyleSheet.create({
    container:{
        padding:24,
        flex:1,
        backgroundColor:GlobalStyles.colors.primary200
    }
})