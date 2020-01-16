import * as actiontype from './actionTypes';
import axios from 'axios';

export const authSuccess=(token)=>{
    return {
        type:actiontype.AUTH_SUCCESS,
        payload:token

    }
}


export const authFail=(error)=> {
    return {
        type:actiontype.AUTH_FAIL,
        payload:error
    }
}


export const authLogin =(username,password) => {
    return dispatch => {
  axios.post('http://127.0.0.1:8000/rest-auth/login/',{
     username:username,
     password:password
 })
 .then(res=>{
     const token=res.data.key
     localStorage.setItem('token',token)
     dispatch(authSuccess(token))
 })
 .catch(err=>{
     dispatch(authFail(err))
 })
    }
}

export const authSignUp =(username,email,password1,password2) => {
    return dispatch => {
  axios.post('http://127.0.0.1:8000/rest-auth/registration/',{
     username:username,
     email:email,
     password1:password1,
     password2:password2,

 })
 .then(res=>{
     const token=res.data.key
     localStorage.setItem('token',token)
     dispatch(authSuccess(token))
 })
 .catch(err=>{
     dispatch(authFail(err))
 })
    }
}

export const  authLogout=()=>{
    localStorage.removeItem('user')
    return{
        type:actiontype.AUTH_LOGOUT,
        payload:null
    }
}