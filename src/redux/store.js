import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: { 
    profilePage: {
      posts: [
        {id: 1, message: "It's my first props", likesCount: 12},
        {id: 2, message: 'Post 222222222', likesCount: 3},
        {id: 3, message: 'Post 333333333', likesCount: 4},
      ],
      newPostText: 'Napisz tu nowy post'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  
  },
  getState() {
    return this._state
  },

  _callSubscriber() {
    console.log('State is changed');
  },
  //addPost() {},
  //updateNewPostText(newText) {},
  subscribe(observer) {
    this._callSubscriber = observer;  //observer / publisher- subscriber / pattern (.button.addEventListener)
  }, //callback from index


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

window.store = store;
export default store;