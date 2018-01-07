import React from 'react';
import Elements from "./Elements/Elements";
import Button from "../UI/Button/Button";
import cls from './Product.css';

const Product = (props) => {
    let elems = Object.keys(props.elements).map(elKey => {
        return [...Array(props.elements[elKey])].map((_,index) => {
            return <Elements type={elKey} key={elKey+index}/>
        })
    }).reduce((arr,el) => {
        return arr.concat(el);
    })
    if(elems.length === 0) {
        elems = <span>Please, add the ingredient</span>
    }
    return (
        <div className={cls.Product} id={props.moo}>
            <Elements type='top'/>
            {elems}
            <Elements type='bottom'/>
        </div>
        )
}
export default Product