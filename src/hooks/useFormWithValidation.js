import React, { useCallback } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: event.target.validationMessage});
    setIsValid(event.target.closest("form").checkValidity());
  };

  const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid])

  return {values, handleChange, resetForm, errors, isValid};
}