import React from 'react';

const input = props => {
    return (
        <div className="form-group">
            <input {...props.config}
            required
            value={props.value}
            onChange={props.changed} ></input>
        </div>
    );
}
export default input;