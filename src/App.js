import React from 'react';
import Header from './app/components/header/header';
import TaskList from './app/pages/task-list';


function App() {
  return (
    <div className="background_color" >
      <Header></Header>
      <TaskList></TaskList>
    </div>

  );
}

export default App;
