import React from 'react';
import TodoComplateInput from './TodoComplateInput';
interface Todo {
  id: number;
  todo: string;
  complated: boolean;
}
interface Props {
  data: Todo[];
}

const TodoList: React.FC<Props> = props => {
  const { data } = props;

  return (
    <ul className="list-group">
      {data.map(o => (
        <li className="list-group-item" key={o.id}>
          <TodoComplateInput complated={o.complated}>
            {o.todo}
          </TodoComplateInput>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
