import React, { useState } from 'react';

interface Props {
  children: JSX.Element | string;
  complated: boolean;
}

const TodoComplateInput: React.FC<Props> = props => {
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

const useFormInputCheckbox = (initialValue: boolean) => {
  const [checked, setChecked] = useState<boolean>(initialValue);

  function handleChange() {
    setChecked(!checked);
  }

  return { defaultChecked: checked, onChange: handleChange };
};

export default TodoComplateInput;
