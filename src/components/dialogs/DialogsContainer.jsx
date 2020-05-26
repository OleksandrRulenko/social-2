import React from 'react'
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsReducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'


const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }            
                return <Dialogs 
                    updateNewMessageBody={onNewMessageChange} 
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
        }
    </StoreContext.Consumer>
}
export default DialogsContainer