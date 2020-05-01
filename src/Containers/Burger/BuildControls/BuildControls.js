import React from  'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const Controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

export  default  function BuildControls(props){
    return(
        <div className = {classes.BuildControls}>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            {Controls.map(item=>(<BuildControl
            key = {item.label}
            added = {()=>props.ingredientAdded(item.type)}
            removed = {()=>props.ingredientRemoved(item.type)}
            enabled = {props.isAvailableToRemove[item.type]}
            >{item.label}</BuildControl>))}
            <button className ={classes.OrderButton}
            disabled = {!props.purchasable}>Order Now</button>
        </div>
    )
}