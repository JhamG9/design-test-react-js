import React from 'react';
import Header from './app/components/header/header';
import TaskList from './app/pages/task-list';
import ButtonPlus from './app/components/button-plus/button-plus';
import './App.css';


function App() {
  return (
    <div className="background-color" >
      <ButtonPlus></ButtonPlus>
      <Header></Header>
      <TaskList></TaskList>
    </div>

  );
}

export default App;
