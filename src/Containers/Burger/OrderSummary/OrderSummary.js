import React from 'react'
import Aux from '../../../HOC/Auxiliary'
import Button from '../../../Components/UI/Button/Button'

const OrderSummary = function(props){
const ingredientList = Object.keys(props.ingredients).map(key => (<li>{key} : {props.ingredients[key]}</li>))
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientList}
            </ul>
            <p>Totol Price : {props.price.toFixed(2)}</p>
            <Button btnType="Success"
            clicked = {props.purchase}
            >Continue</Button>
        </Aux>
    )
}

export default OrderSummary