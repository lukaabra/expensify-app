import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add expense</h1>
        <ExpenseForm
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

// Using connect in this case without a state only so the component can have access to dispatch for the onClick handler
export default connect()(AddExpensePage);