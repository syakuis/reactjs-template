import React from 'react';
import { TodoSpec } from '@/todo.ts/services/todo';
import TodoComplateInput from './TodoComplateInput';
interface Props {
  data: TodoSpec[];
}

const TodoList: React.FC<Props> = props => {
  const { data } = props;

  return (
    <ul className="list-group">
      {data.map(o => (
        <li className="list-group-item" key={o.id}>
          <TodoComplateInput complated={o.complated}>
            {o.name}
          </TodoComplateInput>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
