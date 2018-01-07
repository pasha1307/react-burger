import React from 'react';
import cls from './Backdrop.css';

const Backdrop = (props)=> {
    const showClass = props.onshow ? 'Open' : 'Close';
    return (
    <div
        className={[cls.Backdrop, cls[showClass]].join(" ")}
        onClick={props.cancel}
    ></div>
)
}

export default Backdrop;