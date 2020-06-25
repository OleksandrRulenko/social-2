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
}

const dialogsReducer = (state = initialState, action) => {

  let stateCopy;

  switch(action.type) {
      case SEND_MESSAGE:
          let newMessageText = action.newMessageBody;
          return { 
            ...state,
            messages: [ ...state.messages, {id: 6, message: newMessageText}],
          }; 
      default:
          return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ( { type: 'SEND_MESSAGE', newMessageBody })   // Action creator 

export default dialogsReducer