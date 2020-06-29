import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload, 
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: 'SET_USER_DATA', payload:
         {userId, email, login, isAuth}})   // Action creator // {userId, email, login} Order as in UserMenuContainer.jsx

export const getAuthUserData = () => (dispatch) => {  // redux-thunk.
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
          let { id, login, email } = response.data.data;
          dispatch(setAuthUserData(id, email, login, true));  // (userId, email, login) Order as in authReducer.js
        }
    }); 
}

export const login = (email, password, rememberMe) => (dispatch) => {  // redux-thunk.
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
    }); 
}

export const logout = () => (dispatch) => {  // redux-thunk.
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
    }); 
}

export default authReducer