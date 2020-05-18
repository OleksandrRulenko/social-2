let rerendeerEntireTree = () => {
  console.log('State is changed');
}

let state = { 
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
  didebar: {}

}

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,

  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerendeerEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerendeerEntireTree(state);
}

export const susbscribe = (observer) => {
  rerendeerEntireTree = observer;  //observer / publisher- subscriber / pattern (.button.addEventListener)
} //callback from index

export default state;