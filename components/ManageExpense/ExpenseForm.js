import { StyleSheet, Text, View, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import CustomButton from "../UI/Button";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, selectedExpense }) {
    const [inputValues, setInputValues] = useState({
        amount: {
            value: selectedExpense ? selectedExpense.amount.toString() : '',
            isValid: true
        },
        date: {
            value: selectedExpense ? selectedExpense.date.toISOString().slice(0, 10) : '',
            isValid: true
        },
        description: {
            value: selectedExpense ? selectedExpense.description : '',
            isValid: true
        }
    });

    //NEW AND NEED TO LEARN
    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValue) => {
            return {
                ...currentInputValue,
                //set a javascript property directly
                [inputIdentifier]: {
                    value: enteredValue,
                    isValid: true
                }
            }
        })
    }

    function submitFormHandler() {
       
        if (isAmountValid || isDateValid || isDescriptionValid) {
            setInputValues((current) => {
                return {
                    amount: {
                        value: current.amount.value,
                        isValid: isAmountValid
                    },
                    date: {
                        value: current.date.value,
                        isValid: isDateValid
                    },
                    description: {
                        value: current.description.value,
                        isValid: isDescriptionValid
                    }

                }
            })
        }

        onSubmit(expenseData);

    }

    const expenseData = {
        amount: +inputValues.amount.value,
        date: new Date(inputValues.date.value),
        description: inputValues.description.value

    }
    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const isDateValid = expenseData.date.toString !== 'Invalid date'
    const isDescriptionValid = expenseData.description.trim().length > 0;
    const formIsInValid= !isAmountValid || !isDateValid || !isDescriptionValid 

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <Input label="Amount"
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount.value
                }} />
            <Input label="Date"
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date.value
                }} />
            <Input label="Description"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description.value
                }} />
            {formIsInValid && <Text> Not valid input!! Please check input values.</Text>}

            <View style={styles.buttons}>
                <CustomButton mode='flat'
                    onPress={onCancel}>Cancel</CustomButton>
                <CustomButton onPress={submitFormHandler}>{submitButtonLabel}</CustomButton>
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    form: {
        marginTop: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})