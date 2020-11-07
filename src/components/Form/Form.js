import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../UI/Input/input';
import Signup from './Signup/Signup';
import { updateObject } from '../../shared/utility';
import * as actions from '../../store/actions';

const Form = (props) => {
    const [loginInputEl, setLoginInputEl] = useState({
        email: {
            config: {
                type: 'email',
                placeholder: 'Email',
                className: 'form-control',
            },
            value: '',
        },
        password: {
            config: {
                type: 'password',
                placeholder: 'Password',
                className: 'form-control',
            },
            value: '',
        },
    });

    let inputEl = [];
    for (let key in loginInputEl) {
        inputEl.push({
            key: key,
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

    let login = inputEl.map((el, i) => (
        <Input
            config={el.config}
            key={i}
            value={el.value}
            changed={(e) => inputChangeHandler(e, el.key)}
        />
    ));

    let formInput =
        props.type === 'signup' ? (
            <Signup
                inputElement={props.inputEl}
                changed={props.changed}
            />
        ) : (
            login
        );

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.type === 'signup'
                    ? props.onAuthSubmit(props.formData, props.type)
                    : props.onAuthSubmit(loginInputEl, props.type);
            }}
        >
            {formInput}
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthSubmit: (data, type) => dispatch(actions.auth(data, type)),
    };
};

export default connect(null, mapDispatchToProps)(Form);
