import React from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

const form = props => {
    let form;
    if (props.type === 'login') form = <Login />
    if (props.type === 'signup') form = <Signup/>
    return (<form>{form}</form>);
}

export default form;