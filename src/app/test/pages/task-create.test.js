import '@testing-library/jest-dom';
import React from "react";
import { TaskCreate } from '../../pages/task-create';

describe('Tes unit for component task-create.js', () =>{
   
    const render = renderer.create(
        <TaskCreate />
      ).toJSON(); 

    test('UnitTes to renderDate with the now date ', () => {
    })
    
});