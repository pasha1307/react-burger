import React from 'react';
import cls from './Elements.css'

const Element = (props) => {
    let element = null;
    switch (props.type) {
        case ('top'):
            return element = (<div className={cls.Top}>
                <div className={cls.Seeds1}></div>
                <div className={cls.Seeds2}></div>
            </div>);
                break;
                case ('beef'):
            return element = <div className={cls.Beef}></div>;
            break;
        case ('onion'):
            return  element = <div className={cls.Onion}></div>;
            break;
        case ('tomato'):
            return  element = <div className={cls.Tomato}></div>;
            break;
        case ('cheese'):
            return  element = <div className={cls.Cheese}></div>;
            break;
        case ('lettuce'):
            return element = <div className={cls.Lettuce}></div>;
            break;
        case ('bottom'):
            return <div className={cls.Bottom}></div>;
            break;
            default:
                return element;
    }
};
export default Element;