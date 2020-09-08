import React from 'react';
import './App.css';
import Todo from './ToDo/TodoList';

function App() {
  const todos = [
    { id: 1, complelted: false, title: 'Купить хлеб' },
    { id: 2, complelted: false, title: 'Купить масло' },
    { id: 3, complelted: false, title: 'Купить молоко' },
  ];

  return (
    <div className="App">
      <Todo todos={todos} />
    </div>
  );
}

export default App;
