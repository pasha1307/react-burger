import React, {Component} from 'react';
import Aux from "../hoc/Aux";
import Product from "../components/Product/Product";
import Panel from "../components/Panel/Panel";
import Modal from "../components/UI/Modal/Modal";
import Summary from "../components/Product/Summary/Summary";
import cls from './Builder.css';
import instance from '../Axios';
import {TweenMax, Power2, Bounce, Back, TimelineLite} from "gsap";
import Spinner from "../components/UI/Spinner/Spinner";
import ErrorHandler from "../hoc/errorHandlerComponent/errorHandler";

const PRICE_ADDS = {
    beef: 1.2,
    onion: 0.4,
    tomato: 0.5,
    cheese: 0.9,
    lettuce: 0.3
};
class Builder extends Component {
   componentDidMount() {
       // TweenMax.fromTo("#burger", 2, {yPercent: -120 }, { yPercent: 1, ease:Bounce.easeOut, delay: 3.2});
       // TweenMax.fromTo("#anime", 1, {yPercent: 40, opacity: 1}, {yPercent: -100, opacity: 0, ease:Back.easeInOut, delay: 3});
       TweenMax.fromTo("#anime-1", 2, {yPercent: -100, opacity: 0 }, {yPercent: 0, opacity: 1, ease:Back.easeInOut, delay: 5});
    instance.get('elements.json').then(res => {
        this.setState({elements: res.data});
    })
        .catch(err => this.setState({error: true}));
   }
    state = {
        elements: null,
        basePrice: 4,
        ordable: false,
        show: false,
        loading: false,
        error: false
    };
onShow = ()=> {
    this.setState({show: true})
}
onCancel = ()=> {
    this.setState({show:false})
}
    onAdd = (type) => {
        const oldCount = this.state.elements[type];
        const newCount = oldCount + 1;
        const updateEls = {...this.state.elements};
        updateEls[type] = newCount;
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice + PRICE_ADDS[type];
        this.setState({elements: updateEls, basePrice: newPrice});
    };
    onContinue = () => {
        this.setState({loading: true})
        const item = {
            elements: this.state.elements,
            price: this.state.basePrice
        }
        instance.post('burger.json', item).then(res => {
            this.setState({loading: false, show: false})
        }).catch(err => {
            this.setState({loading:false, show: false});
            console.log(err)
        })
    }
    onRemove = (type) => {
        const oldCount = this.state.elements[type];
        if(oldCount <=0) {
            return
        }
        const newCount = oldCount - 1;
        const updatedEls = {...this.state.elements};
        updatedEls[type] = newCount;
        const oldPrice = this.state.basePrice;
        const newPrice = oldPrice - PRICE_ADDS[type];
        this.setState({elements: updatedEls, basePrice: newPrice});
    };
    render() {
        let baseCount = {...this.state.elements};
        let totalCount = Object.keys(baseCount).map((el) => {
            return baseCount[el]
        }).reduce((arr,elI) => {
            return arr + elI;
        },0);

        for (let i in baseCount) {
           baseCount[i] = baseCount[i] <= 0;
        }
        let order = null;
        let burger;
        if(this.state.loading) {
            order = <Spinner/>
        }
        burger = this.state.error ? <p>Something is wrong</p> : <Spinner/>;
        if (this.state.elements) {
            order = <Summary
                price={this.state.basePrice}
                elements={this.state.elements}
                cancel={this.onCancel}
                tobuy = {this.onContinue}
            />;
            burger = (
                <Aux>
                <div>
                <Product elements={this.state.elements} moo="burger" />
                <Panel
                    added = {this.onAdd}
                    removed = {this.onRemove}
                    disabled={baseCount}
                    ondis={totalCount === 0}
                    elements={this.state.elements}
                    toshow={this.onShow}
                /></div>
                </Aux>
            )
        }

        return (
            <Aux>
                <Modal onshow={this.state.show} cancel={this.onCancel}>
                    {order}
                </Modal>
                {/*<div className={cls.anime} id='anime'>*/}
                    {/*<h1>Miracle Burger</h1>*/}
                {/*</div>*/}
                <div className={cls.anime_1} id='anime-1'>
                    <h1>Build Your Burger</h1>
                </div>
                {burger}
            </Aux>
        )
    }
}
export default ErrorHandler(Builder, instance);