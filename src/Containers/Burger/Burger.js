import React, { Component } from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

class Burger extends Component {
        render() {
            let     transformedIngredients = Object.keys(this.props.ingredient).map(
                ing => [...Array(this.props.ingredient[ing])].map((_,i)=>{
                    return <BurgerIngredient key={ing + i} type={ing} />
                })).reduce((i1,i2)=>i1.concat(i2))
            return <div className ={classes.Burger}>
                        <BurgerIngredient type="bread-top" />
                            {transformedIngredients.length?transformedIngredients:<p>
                                Please select ingredients</p>}
                        <BurgerIngredient type="bread-bottom" />
                    </div>
    }
}

export default  Burger