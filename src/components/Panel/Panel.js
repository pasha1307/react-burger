import React from 'react';
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Button";
import cls from './Panel.css';
import Row from "./Row/Row";
const controls = [
    {label: 'Beef', type: 'beef'},
    {label: 'Onion', type: 'onion'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Lettuce', type: 'lettuce'}
];
const Panel = (props) => {
    const count = Object.keys(props.elements).map((elKey,i) => {
        return props.elements[elKey];
    });
    const els = controls.map((el, index) => {
        return <div key={index}>
            <Row add={()=> props.added(el.type)}
                 remove={()=> props.removed(el.type)}
                 label={el.label}
                 disabled={props.disabled[el.type]}
                 count={count[index]}
            />
        </div>
    })
    return (
        <div className={cls.Panel}>
            {els}
           <button className={cls.Btn}
                   disabled={props.ondis}
                   onClick={props.toshow}
           >Set Order</button>
        </div>
    )
}
export default Panel;