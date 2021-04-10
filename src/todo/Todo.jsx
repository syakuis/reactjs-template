import React, { useState, useEffect } from 'react';

import { getTodos } from '@/todo/services/todo';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const Todo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    getTodos().then(o => {
      if (mounted) {
        setData(o.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoList data={data} />
      <hr />
      <TodoInput />
    </div>
  );
};

export default Todo;
