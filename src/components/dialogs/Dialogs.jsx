import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'

let dialogs = [
    {id: 1, name: 'Ola'},
    {id: 2, name: 'Mole'},
    {id: 3, name: 'Kole'},
    {id: 4, name: 'Ile'},
    {id: 5, name: 'Nies'},
    {id: 6, name: 'Pia'}
]
let messages = [
    {id: 0, message: "Hi, i'm Olek"},
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it'},
    {id: 1, message: 'Is ghoot'},
    {id: 4, message: 'jes'},
    {id: 5, message: 'Yo'},
    {id: 1, message: 'No'},
]

let dialogsElements = dialogs.map( d =>   <DialogItem id={d.id} name={d.name} /> );
let messagesElements = messages.map(m => <Message message={m.message} id={m.id} /> );
// ****************************************

const Dialogs = (props) => {
    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs