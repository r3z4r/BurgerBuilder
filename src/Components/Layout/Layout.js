import React from 'react'
import Aux from '../../HOC/Auxiliary'
import BurgerBuilder from '../BurgerBuilder/BurgerBuilder'

export default function Layout(props){
    return(
        <Aux>
            <p>Toolbar, Sidebar, Backdrop</p>
            <BurgerBuilder />
        </Aux>
    )
}