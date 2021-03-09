import React from 'react';

const input = (props) => (
    <div className="form-group">
        <input {...props.config} required value={props.value} onChange={props.changed} />
    </div>
);
export default input;
