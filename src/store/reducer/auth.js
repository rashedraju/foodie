import * as actionTypes from '../actions/actionTypes';
const initialState = {
    formData: {
        login: [
            {
                type: 'email',
                placeholder: 'Email',
                className: 'form-control',
                defaultValue: ''
            },
            {
                type: 'password',
                placeholder: 'Password',
                className: 'form-control',
                defaultValue: ''
            },
        ],
        signup: [
            {
                type: 'email',
                placeholder: 'Email',
                className: 'form-control',
                defaultValue: ''
            },
            {
                type: 'password',
                placeholder: 'Password',
                className: 'form-control',
                defaultValue: ''
            },
        ],
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_INPUT_CHANGE:
            return 
    
        default:
            break;
    }
    return state;
}

export default reducer;