import React, { useState, useEffect } from 'react';
import { getTodos, TodoResponse } from '@/todo/services/todo';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const Todo: React.FC<void> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;

    getTodos().then((o: TodoResponse) => {
      if (mounted) {
        setData(o.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container">
      <h1>Todo : 타입스크립트</h1>
      <TodoList data={data} />
      <hr />
      <TodoInput />
    </div>
  );
};

export default Todo;
