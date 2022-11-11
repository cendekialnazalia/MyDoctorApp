import {useState} from 'react';

export const useFrom = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [
    values,
    (formType, formValue) => {
      return setValues({...values, [formType]: formValue});
    },
  ];
};
