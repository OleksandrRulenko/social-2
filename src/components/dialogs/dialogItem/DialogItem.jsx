import React from 'react'
import s from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'


const DialogItem = (props) => {
    return (
        <NavLink to={ '/dialogs/' + props.id }>
            {/* <div className={s.dialog + ' ' + s.active}> */}
            <div className={s.dialogItem}>
                {props.name}
            </div>
        </NavLink>
    )
}


export default DialogItem