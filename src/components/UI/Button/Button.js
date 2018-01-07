import React from 'react';
import cls from './Button.css';

const Button = (props) => <button
    className={[cls.Button, cls[props.btnClass]].join(" ")}
    onClick={props.clicked}
    disabled={props.disabled}
>{props.children}</button>
export default Button;