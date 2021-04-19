import React, { useState, useEffect } from 'react';
import {
  getTodos,
  TodoSpec,
  TodoAxiosResponseSpec,
} from '@/todo.ts/services/todo';

import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const Todo: React.FC = () => {
  const [data, setData] = useState<TodoSpec[]>([]);

  const isMounted = React.useRef(true);
  useEffect(() => {
    getTodos()
      .then((o: TodoAxiosResponseSpec) => {
        if (isMounted.current) {
          setData(o.data);
        }
      })
      .catch((e: Error) => {
        throw e;
      });
    return () => {
      isMounted.current = false;
    };
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
