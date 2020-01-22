import React from 'react';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Import TodoList</h1>
        <TodoForm/>
      </header>
    </div>
  );
}

export default App;
