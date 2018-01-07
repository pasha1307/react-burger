import React from 'react';
import cls from './Nav.css';

const Nav = (props) => {
    return (
        <div className={cls.Header}>
            <nav role="navigation">
                <div id={cls['menuToggle']}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id={cls['menu']}>
                        <a href="#"><li>1Item</li></a>
                        <a href=""><li>2Item</li></a>
                        <a href=""><li>3Item</li></a>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav