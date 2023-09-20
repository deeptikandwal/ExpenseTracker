import { useContext, useLayoutEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/GlobalStlyes";
import CustomButton from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpenses, storeExpense, updateExpenses } from "../util/https";

function ManageExpenses({ route, navigation }) {
    const editedExpenseId = route.params?.navigateId;
    const expenseContext = useContext(ExpensesContext);
    //convert to boolean
    //  undefined=false │ !value = ✔ true   │ !!value = false
    const isEditing = !!editedExpenseId
    const selectedExpense = expenseContext.expenses.find(
        (expense) => expense.id === editedExpenseId
    )
    //  useLayoutEffect hook runs synchronously, after all DOM mutations but useEffect runs asynchronously.
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [isEditing, navigation])

    function deleteExpenseHandler() {
        expenseContext.deleteExpense(editedExpenseId)
        deleteExpenses(editedExpenseId)
        navigation.goBack()
    }

    function cancelHandler() {
        navigation.goBack()
    }

   async function updateHandler(expenseData) {
        if (isEditing) {
            expenseContext.updateExpense(editedExpenseId, expenseData)
            updateExpenses(editedExpenseId)
        } else {
            const id= await storeExpense(expenseData)
            expenseContext.addExpense({...expenseData , id:id})
        }
        navigation.goBack()
    }
    return <View style={styles.container}>
        <ExpenseForm onCancel={cancelHandler}
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onSubmit={updateHandler}
            selectedExpense={selectedExpense} />

        {isEditing &&
            <View style={styles.deleContgainer}>

                <IconButton icon={'trash'}
                    size={36}
                    color={GlobalStyles.colors.error50}
                    onPress={deleteExpenseHandler}></IconButton>
            </View>
        }
    </View>
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary200
    },

    deleContgainer: {
        borderTopColor: GlobalStyles.colors.primary400,
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 3,
        alignItems: 'center'
    }
})