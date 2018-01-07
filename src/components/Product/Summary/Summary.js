import React from 'react';
import cls from './Summary.css';
import Button from "../../UI/Button/Button";

const Summary = (props) => {
    const summ = Object.keys(props.elements).map((elKey, i) => {
        return <li key={i + elKey}>{elKey} - {props.elements[elKey]}</li>
    });
  return  (<div className={cls.Summary}>
    <h2>Vegan Burger: ${props.price.toFixed(2)}</h2>
            <ul>{summ}</ul>
          <div>
              <hr/>
              <Button btnClass="Cancel" clicked={props.cancel}>Cancel</Button>
              <Button btnClass='Continue' clicked={props.tobuy}>Continue</Button>
          </div>

</div>
    )
}
export default Summary