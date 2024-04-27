import React, { useEffect, useState } from 'react'
import { getTodos } from '../../requests/todos';
import { Context } from '../../context';
import TodosContainer from '../../components/TodosContainer/TodosContainer';

export default function TodoPage() {

    const [ todos, setTodos ] = useState([]);

    useEffect(() => getTodos(setTodos), []);

  return (
    <div>
      <Context.Provider value={{todos}}>
        <TodosContainer/>
      </Context.Provider>
    </div>
  );
}
