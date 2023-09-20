import axios from "axios";

const BACKEND_URL = 'https://react-native-tracker-9bef2-default-rtdb.firebaseio.com';
export async function storeExpense(expenseData) {
  const response= await axios.post(BACKEND_URL + '/expenses.json',
        expenseData)

        return response.data.name;
}

export async function fetchExpenses() {
    const response = await axios.get(BACKEND_URL + '/expenses.json')
    const expenses = [];
    for (const key in response.data) {
        const expenseData = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseData);
    }

    return expenses;
}

export  function updateExpenses(id,updatedExpenseData){
    return axios.put(BACKEND_URL+`/expenses/${id}.json`,updatedExpenseData)
}

export function deleteExpenses(id){
    return axios.delete(BACKEND_URL+`/expenses/${id}.json`)
}