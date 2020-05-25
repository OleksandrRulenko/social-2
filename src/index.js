import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';


let rerendeerEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerendeerEntireTree(store.getState());

//store.subscribe(rerendeerEntireTree);  //callback for state
store.subscribe(() => { // 42. Redux 26:30
  let state = store.getState();
  rerendeerEntireTree(state);
});  //callback modified for redux


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
