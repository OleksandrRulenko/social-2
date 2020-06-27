import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
//import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import { Redirect } from 'react-router-dom'
import { Form, Field, reduxForm } from 'redux-form'
import { Textarea } from '../common/formsControls/FormsControls'
import { maxLengthCreator, required } from '../../utils/validators/validators'


const Dialogs = (props) => {
    let state = props.dialogsPage;
 
    let dialogsElements = state.dialogs.map( d =>   <DialogItem id={d.id} key={d.id} name={d.name} /> );
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} /> );
    let newMessageBody = state.newMessageBody; // Body of new message from state.

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />;

    return (
        <div className={s.dialogsPage}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
                <div className={s.messages}>
                    { messagesElements }
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form className={s.addMessage} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    validate={[required, maxLength50]}
                    name="newMessageBody" 
                    placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>     
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"}) (AddMessageForm)

export default Dialogs