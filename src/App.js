import React from 'react';
import Header from './app/components/header/header';
import TaskList from './app/pages/task-list';
import ButtonPlus from './app/components/button-plus/button-plus';


function App() {
  return (
    <div className="background_color" >
      <ButtonPlus></ButtonPlus>
      <Header></Header>
      <TaskList></TaskList>
    </div>

  );
}

export default App;
