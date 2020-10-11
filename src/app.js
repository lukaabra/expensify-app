import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import AppRouter from './routers/AppRouter';
import './styles/styles.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'Water bill',
    amount: 100
}));
store.dispatch(addExpense({
    description: 'Gas bill',
    createdAt: 4500
}));
store.dispatch(addExpense({
    description: 'Rent',
    amount: 1000
}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));