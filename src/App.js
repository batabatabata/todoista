import React from 'react';
// import Counter from './counter/Counter';
import './App.css';
import './index.module.scss';
import Header from './components/organism/Header/';
import TaskList from './components/organism/TaskList';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
