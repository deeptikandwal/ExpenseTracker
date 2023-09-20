import { Text } from "react-native";
import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";
function renderExpenses( itemData) {
    return <ExpenseItem {...itemData.item}/>
}
function ExpensesList({ expenses }) {
    return <FlatList data={expenses}
        renderItem={renderExpenses}
        keyExtractor={(item)=>item.id} />
}

export default ExpensesList;