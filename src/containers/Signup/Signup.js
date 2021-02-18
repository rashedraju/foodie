import React, { Component } from 'react';

import Form from '../../components/Form/SignupForm/SignupForm';
import { updateObject } from '../../shared/utility';
import './Signup.scss';
import mobileBg from "../../assets/img/signup-bg-mobile.png";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },
    };
  }

  inputChangeHandler = (e, key) => {
    const formData = { ...this.state.signupFormData };
    const updatedData = updateObject(formData, {
      [key]: {
        ...formData[key],
        value: e.target.value,
      },
    });

    this.setState({ signupFormData: updatedData });
  };

  render() {
    const inputEl = [];
    for (const key in this.state.signupFormData) {
      inputEl.push({
        key,
        config: {
          ...this.state.signupFormData[key].config,
        },
        value: this.state.signupFormData[key].value,
      });
    }
    return (
      <div className="signup">
        <img src={mobileBg} className="signup__bg-mobile" alt="signup background" />
        <div className="signup__container row">
          <div className="signup__left col-md-6">
            <Form
              method="signup"
              inputEl={inputEl}
              formData={this.state.signupFormData}
              changed={this.inputChangeHandler}
            />
          </div>
          <div className="signup__right col-md-6">

          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     return {
//         signupInputEl : state.auth.formData.signup,
//     }
// }
export default Signup;
