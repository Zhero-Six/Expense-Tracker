import React, { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      expenseName: 'Lunch Meeting',
      description: 'Meeting with clients',
      category: 'Work',
      amount: 150,
      date: '2025-04-15',
    },
    {
      expenseName: 'Buy Shoes',
      description: 'Add to my shoe collection',
      category: 'Personal',
      amount: 1500,
      date: '2025-04-14',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, date: new Date().toISOString().split('T')[0] }]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const handleSort = (field) => {
    const isAsc = sortField === field && sortOrder === 'asc';
    setSortField(field);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortField) return 0;
    const aValue = typeof a[sortField] === 'string' ? a[sortField].toLowerCase() : a[sortField];
    const bValue = typeof b[sortField] === 'string' ? b[sortField].toLowerCase() : b[sortField];
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    }
    return aValue < bValue ? 1 : -1;
  });

  const filteredExpenses = sortedExpenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="app">
        <div className="sidebar">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>
        <div className="main-content">
          <h1>Expense Tracker</h1>
          <SearchBar onSearch={setSearchTerm} />
          <ExpenseTable
            expenses={filteredExpenses}
            onSort={handleSort}
            onDelete={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
};

export default App;