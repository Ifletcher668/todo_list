import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/Todo'

const App = () => {



  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
      <main className="App-main">

      </main>
    </div>
  );
}

export default App;
