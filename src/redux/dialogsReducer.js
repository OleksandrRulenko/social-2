const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Ola'},
        {id: 2, name: 'Mole'},
        {id: 3, name: 'Kole'},
        {id: 4, name: 'Ile'},
        {id: 5, name: 'Nies'},
        {id: 6, name: 'Pia'}
      ],
    messages: [
        {id: 0, message: "Hi, i'm Olek"},
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it'},
        {id: 1, message: 'Is ghoot'},
        {id: 4, message: 'jes'},
        {id: 5, message: 'Yo'},
        {id: 1, message: 'No'},
      ],  
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageText //newMessageText in IT-kam. = body
            return state;
        case SEND_MESSAGE:
            let newMessageText = state.newMessageBody;
            state.messages.push({id: 6, message: newMessageText});
            state.newMessageBody = ''; 
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ( { type: 'SEND_MESSAGE' })   // Action creator 
export const updateNewMessageBodyCreator = (body) =>  
  ({ type: 'UPDATE_NEW_MESSAGE_BODY', newMessageText: body })


export default dialogsReducer