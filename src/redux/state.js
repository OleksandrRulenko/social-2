const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    if (action.type === 'ADD_POST') { // Adds a new post to the profile page.
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state); // Draws the page again.
    }  else if (action.type === 'UPDATE_NEW_POST_TEXT') { // Update the entered symbols to the variable newText.
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }


  }
}


// export const addPostActionCreator = () => {
//   return {
//       type: 'ADD_POST'
//   }
// }
export const addPostActionCreator = () => ({ type: 'ADD_POST' })
export const updateNewPostTextActionCereator = (text) => 
  ({type: 'UPDATE_NEW_POST_TEXT', newText: text })


window.store = store;
export default store;