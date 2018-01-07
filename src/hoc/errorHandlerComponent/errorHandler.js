import React, {Component} from 'react';
import Aux from "../Aux";
import Modal from "../../components/UI/Modal/Modal";

const ErrorHandler = (ErrorWrapper, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
            this.reqInter = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
           this.resInter = axios.interceptors.response.use(res => res,error => {
                this.setState({error: error})
            })
        };
        componentWillUnmount() {
            console.log('Will Unmount', this.reqInter, this.resInter);
            axios.interceptors.request.eject(this.reqInter);
            axios.interceptors.response.eject(this.resInter);
        }
        onCancelError = () => {
            this.setState({error:null})
        }
        render() {
            return (
                <Aux>
                   <ErrorWrapper {...this.props}/>
                    <Modal
                    cancel={this.onCancelError}
                    onshow={this.state.error}
                    ></Modal>
                </Aux>
                )


        }

    }
}

export default ErrorHandler;