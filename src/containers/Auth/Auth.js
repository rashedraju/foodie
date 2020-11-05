import React, { Component } from 'react';

import Form from '../../components/Form/Form';
import { updateObject } from '../../shared/utility';

class Auth extends Component {
    state = {
        signupFormData: {
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
        }
    };

    inputChangeHandler = (e, key) => {
        const formData = {...this.state.signupFormData}
        const updatedData = updateObject(formData, {
            [key]: {
                ...formData[key],
                value: e.target.value
            }
        });

        this.setState({signupFormData: updatedData});
    }

    render () {
        let inputEl = [];
        for (let key in this.state.signupFormData) {
            inputEl.push({
                key: key,
                config: {
                    ...this.state.signupFormData[key].config
                },
                value: this.state.signupFormData[key].value
            }) 
        }
        return (
            <Form type="signup" signupInputEl={inputEl} changed={this.inputChangeHandler} />
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         signupInputEl : state.auth.formData.signup,
//     }
// }
export default Auth;