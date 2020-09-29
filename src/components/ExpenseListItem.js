import React from 'react';
import { connect } from 'react-redux';

import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={(e) => {
            dispatch(removeExpense({ id }))
        }}>Remove</button>
    </div>
);

// Using connect in this case without a state only so the component can have access to dispatch for the onClick handler
export default connect()(ExpenseListItem);