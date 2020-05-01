import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props)=>(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.children}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={!props.enabled}
            >Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button>
    </div>
)


export default BuildControl