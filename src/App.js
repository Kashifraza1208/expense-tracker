import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New Car',
    amount: 942.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Refrigerator',
    amount: 294.67,
    date: new Date(2021, 6, 28),
  },
  {
    id: 'e4',
    title: 'Machine',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e4',
    title: 'Mobile',
    amount: 150,
    date: new Date(2020, 2, 2),
  },
  {
    id: 'e4',
    title: 'Laptop',
    amount: 550,
    date: new Date(2019, 7, 6),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;