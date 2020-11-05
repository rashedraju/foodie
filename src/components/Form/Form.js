import React, {useState} from 'react';

import Input from '../UI/Input/input';
import Signup from './Signup/Signup';
import { updateObject } from '../../shared/utility';

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
    })

    let inputEl = [];
        for (let key in loginInputEl) {
            inputEl.push({
                key: key,
                config: {
                    ...loginInputEl[key].config
                },
                value: loginInputEl[key].value
            }) 
    }

    const inputChangeHandler = (e, key) => {
        const updatedData = updateObject(loginInputEl, {
            [key]: {
                ...loginInputEl[key],
                value: e.target.value
            }
        });
    
        setLoginInputEl(updatedData);
    }

    let login = inputEl.map((el, i) => <Input config={el.config} key={i} value={el.value} changed={(e) => inputChangeHandler(e, el.key)} />)

    let formInput =
        props.type === 'signup' ? (
            <Signup
                inputElement={props.signupInputEl}
                inputChange={props.onSignupInputChange}
                changed={props.changed}
            />
        ) : login;

    return <form>{formInput}</form>;
};

export default Form;
