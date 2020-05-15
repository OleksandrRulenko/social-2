import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'


const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogs.map( d =>   <DialogItem id={d.id} name={d.name} /> );
    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} /> );

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let message = newMessageElement.current.value;
        alert(message)
    }

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div>
                <div className={s.addMessage}>
                    <textarea ref={newMessageElement} ></textarea><br />
                    <button onClick={addMessage} >Send</button>
                </div>
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>
    )
}

export default Dialogs