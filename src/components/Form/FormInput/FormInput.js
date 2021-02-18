import React from 'react';

const FormInput = props => (
    <div className="form-group">
        <input {...props.config}
            required
            value={props.value}
            onChange={props.changed} ></input>
    </div>
)
export default FormInput;