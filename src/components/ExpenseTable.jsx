import React from 'react';

const ExpenseTable = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.length === 0 ? (
          <tr>
            <td colSpan="5">No expenses found</td>
          </tr>
        ) : (
          items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${Number(item.amount).toFixed(2)}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
