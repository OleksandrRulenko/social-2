import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import { Redirect } from 'react-router-dom'


const Dialogs = (props) => {
    let state = props.dialogsPage;
 
    let dialogsElements = state.dialogs.map( d =>   <DialogItem id={d.id} key={d.id} name={d.name} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} /> );
    let newMessageBody = state.newMessageBody; // Body of new message from state.

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div>
                <div className={s.addMessage}>
                    <textarea value={newMessageBody} 
                            onChange={onNewMessageChange}   // Insted ref={  }
                            placeholder='Enter your message'></textarea><br />
                    <button onClick={ onSendMessageClick } >Send</button>
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>
    )
}
export default Dialogs