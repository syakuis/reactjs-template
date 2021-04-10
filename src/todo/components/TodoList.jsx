import React from 'react';
import PropTypes from 'prop-types';
import TodoComplateInput from './TodoComplateInput';

const TodoList = props => {
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

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
