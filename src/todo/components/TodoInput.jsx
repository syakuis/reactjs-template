import React, { useState } from 'react';

const TodoInput = () => {
  const todo = useFormInput('');

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="할일을 입력하세요."
        {...todo}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        추가
      </button>
    </div>
  );
};

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return { value, onChange: handleChange };
};

export default TodoInput;
