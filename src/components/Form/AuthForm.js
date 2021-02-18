import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from './FormInput/FormInput';
import { updateObject } from '../../shared/utility';
import * as actions from '../../store/actions';

const Form = (props) => {
  const [loginInputEl, setLoginInputEl] = useState({
    email: {
      config: {
        method: 'email',
        placeholder: 'Email',
        className: 'form-control',
      },
      value: '',
    },
    password: {
      config: {
        method: 'password',
        placeholder: 'Password',
        className: 'form-control',
      },
      value: '',
    },
  });

  const inputEl = [];

  for (const key in loginInputEl) {
    inputEl.push({
      key,
      config: {
        ...loginInputEl[key].config,
      },
      value: loginInputEl[key].value,
    });
  }

  const inputChangeHandler = (e, key) => {
    const updatedData = updateObject(loginInputEl, {
      [key]: {
        ...loginInputEl[key],
        value: e.target.value,
      },
    });

    setLoginInputEl(updatedData);
  };

  const login = inputEl.map((el, i) => (
    <FormInput
      config={el.config}
      key={i}
      value={el.value}
      changed={(e) => inputChangeHandler(e, el.key)}
    />
  ));

  const formInput =
    props.method === 'signup' ? (
      <FormInput inputElement={props.inputEl} changed={props.changed} />
    ) : (
        login
      );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.method === 'signup'
          ? props.onAuthSubmit(props.formData, props.method)
          : props.onAuthSubmit(loginInputEl, props.method);
      }}
    >
      {formInput}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onAuthSubmit: (data, method) => dispatch(actions.auth(data, method)),
});

export default connect(null, mapDispatchToProps)(Form);
