import React from 'react'
import s from './Dialogs.module.css'
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

const Message = (props) => {
    return (
        <div className={`${s.message} ${s.interlocutor1}`}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Sasha' id='2'/>
                <DialogItem name='Iuliia' id='3'/>
            </div>

            <div className={s.messages}>
                <Message message='Hi'/>
                <div className={`${s.message} ${s.interlocutor2}`}>How is your</div>
                <Message message='Hi, user'/>
                <div className={`${s.message} ${s.interlocutor2}`}>Yo yo</div>
            </div>
        </div>
    )
}

export default Dialogs