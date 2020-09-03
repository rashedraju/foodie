import React from 'react';

const button = props => (
    <button className={props.cls} onClick={props.clicked}>
        <span>{props.leftIcon ? <img src={props.leftIcon} alt="left Icon"></img> : null}</span>{props.title} <span>{props.rightIcon ? <img src={props.rightIcon} alt="right Icon"></img> : null} </span>
    </button>
);

export default button;