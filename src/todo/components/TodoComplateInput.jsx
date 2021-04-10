import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoComplateInput = props => {
  const { children, complated } = props;
  const attrs = useFormInputCheckbox(complated);

  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" {...attrs} />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {children}
      </label>
    </div>
  );
};

const useFormInputCheckbox = initialValue => {
  const [checked, setChecked] = useState(initialValue);

  function handleChange() {
    setChecked(!checked);
  }

  return { defaultChecked: checked, onChange: handleChange };
};

TodoComplateInput.propTypes = {
  children: PropTypes.node.isRequired,
  complated: PropTypes.bool.isRequired,
};

export default TodoComplateInput;
