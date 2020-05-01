import React, { Component } from 'react'
import Burger from '../../Containers/Burger/Burger'
import Aux from '../../HOC/Auxiliary'
import BuildControls from '../../Containers/Burger/BuildControls/BuildControls'
import Modal from '../UI/Modal/Modal'
import OrderSummary from '../../Containers/Burger/OrderSummary/OrderSummary'

const basePrice = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};


class BurgerBuilder extends Component {
    state = {
        ingeridient : {
            salad : 0,
            cheese : 0,
            bacon : 0,
            meat : 0
        },
        Totalprice : 4,
        Purchasable : false
    }
    updatePurchaseState(ingeridients)  {
       const sum =  Object.keys(ingeridients).map(type=>ingeridients[type]).reduce((sum,i)=>sum+i,0)
       this.setState({Purchasable:sum>1})
       console.log(this.state.Purchasable)
    }
    removeHandler = (type)=>{
        const updatedIng = this.state.ingeridient
        if(updatedIng[type]>0){
            updatedIng[type] --
        this.setState(perv=>{
                return {ingeridient: updatedIng,Totalprice: perv.Totalprice - basePrice[type]}
            }
        )}
        this.updatePurchaseState(updatedIng)
    }
    addHandler = (type)=>{
        const updatedIng = this.state.ingeridient
        updatedIng[type] ++
        this.setState(perv=>{
            return {ingeridient: updatedIng,Totalprice: perv.Totalprice + basePrice[type]}
        })
        this.updatePurchaseState(updatedIng)
    }

    render(){
        const disabledInfo = {...this.state.ingeridient}
        for(let item in disabledInfo){
            disabledInfo[item] = disabledInfo[item]>0
        }
        return (<Aux>
                    <Modal>
                        <OrderSummary
                        ingredients = {this.state.ingeridient}
                        price = {this.state.Totalprice}
                        purchase = {()=>alert('Enjoy')}
                        />
                    </Modal>
                    <Burger ingredient = {this.state.ingeridient}/>
                    <BuildControls 
                        ingeridients = {this.state.ingeridient}
                        ingredientAdded = {this.addHandler}
                        ingredientRemoved = {this.removeHandler}
                        price = {this.state.Totalprice}
                        purchasable = {this.state.Purchasable}
                        isAvailableToRemove = {disabledInfo}
                    />
                </Aux>)
            
    }
}

export default BurgerBuilder