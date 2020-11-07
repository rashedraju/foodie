import React from 'react';

const button = props => (
    <button type={props.type} className={props.cls + 'outline-none'} onClick={props.clicked}>
        <span>{props.leftIcon ? <img src={props.leftIcon} alt="left Icon"></img> : null}</span>{props.title} <span>{props.rightIcon ? <img src={props.rightIcon} alt="right Icon"></img> : null} </span>
    </button>
);

export default button;