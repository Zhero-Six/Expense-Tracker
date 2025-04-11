import React from 'react';

const ExpenseTable = ({ expenses, onSort, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Description{' '}
            <button onClick={() => onSort('description')}>Sort</button>
          </th>
          <th>Amount</th>
          <th>
            Category <button onClick={() => onSort('category')}>Sort</button>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length > 0 ? (
          expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.description}</td>
              <td>${parseFloat(expense.amount).toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onDelete(index)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No expenses found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;