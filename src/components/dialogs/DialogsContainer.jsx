import React from 'react'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <Dialogs 
            updateNewMessageBody={onNewMessageChange} 
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
}
export default DialogsContainer