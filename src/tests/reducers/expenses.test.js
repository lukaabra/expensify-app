import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 109,
        description: 'PC',
        note: '',
        createdAt: 20000,
        amount: 29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
    const text = 'Gas bill';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            text
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].text).toBe(text);
});

test('should not edit an expense if id not found', () => {
    const text = 'Gas bill';
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            text
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});