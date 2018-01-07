import React, {Component} from 'react'
import cls from './Layout.css';
import Aux from "../Aux";
import Nav from "../../components/Nav/Nav";


class Layout extends Component {
    render() {
        return (<div>
            <Aux>
                <header>
                    <Nav/>
                </header>
                <main className={cls.Main} >
                    {this.props.children}
                </main>
            </Aux>
            </div>)
    }
}
export default Layout;