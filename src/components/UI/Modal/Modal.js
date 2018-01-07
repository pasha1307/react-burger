import React, {Component} from 'react';
import cls from './Modal.css';
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {
    shouldComponentUpdate(nextProps) {
       return nextProps.onshow !== this.props.onshow || nextProps.children !== this.props.children
    }
    componentWillUpdate() {
        console.log('[Modal] will update')
    }
    render() {
        let showClass = this.props.onshow ? 'Open' : 'Close';
        return (
            <Aux>
                <Backdrop
                    cancel={this.props.cancel}
                    onshow={this.props.onshow}
                />
                <div className={[cls.Modal, cls[showClass]].join(" ")} >{this.props.children}</div>
            </Aux>
        )
    }
}

export default Modal;