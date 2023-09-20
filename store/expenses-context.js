import { createContext, useReducer } from 'react';
// https://github.com/academind/react-native-practical-guide-code/blob/08-practice-app/code/12-managing-app-wide-state/store/expenses-context.js

//just structure of expense context for autocompleteion
export const ExpensesContext = createContext({
  expenses: [],
  setExpenses:(expenses)=>{},
  //this will receive an object
  addExpense: ({ description, amount, date }) => { },
  deleteExpense: (id) => { },
  //this will receive id and data with which this should be updated.
  updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
  //always returns state
  switch (action.type) {
    case 'ADD':
      return [action.payload , ...state];

    case 'SET':
      return action.payload;
    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  //state management logic. It works similar to useState but used for complex
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: 'ADD', payload: expenseData });
  }

  function deleteExpense(id) {
    // dispatch an object as action  with payload and type
    dispatch({ type: 'DELETE', payload: id });
  }
  function setExpenses(expenses) {
    dispatch({ type: 'SET', payload: expenses })
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    setExpenses:setExpenses,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
  }
  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;