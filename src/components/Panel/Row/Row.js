import React from 'react';
import Button from "../../UI/Button/Button";
import cls from './Row.css';

const Row = (props) => (
    <div className={cls.Row}>
        <label>{props.label}
        <span style={{
            color: props.count > 0 ? 'var(--white)' : 'rgba(0,0,0,.1)'
        }}> - {props.count}</span>
        </label>
        <Button clicked = {props.add} btnClass="Add">Add</Button>
        <Button clicked={props.remove} btnClass="Remove" disabled={props.disabled}>Remove</Button>
    </div>
);
export default Row;