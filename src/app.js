import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import AppRouter from './routers/AppRouter';
import './styles/styles.css';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({
    description: 'Rent for my villa',
    amount: 100,
    createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffee to go',
    amount: 10,
    createdAt: -1000
}));

store.dispatch(setTextFilter('rent'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));