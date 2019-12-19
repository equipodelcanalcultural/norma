import { getData } from "./reduxFetch";
import {AsyncStorage} from 'react-native';
const jwtDecode = require('jwt-decode');

export const userPostFetch = user => {
    return dispatch => {
      return getData("https://mytinerary-marta-norma.herokuapp.com/api/users/register", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user)
      },(data) => { 
             if(data.success) {
              AsyncStorage.setItem("token", data.token)
              dispatch(createUser(data))
            }else{
              AsyncStorage.removeItem("token")
              console.log(data.msg)
            }  
      }) 
    }
  }

  export const userLoginFetch = user => {
    return dispatch => {
      return getData("https://mytinerary-marta-norma.herokuapp.com/api/users/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(user)
      },(data) => { 
             if(data.success===true) {
               AsyncStorage.setItem("token", data.token)
               dispatch(loginUser(data))
            }else{
              AsyncStorage.removeItem("token")
              console.log(data.msg);
            }  
      })   
    }
  }

  export const getUserFetch = () => {
    return dispatch => {
      const token = AsyncStorage.token;
      if (token) {
        return getData("https://mytinerary-marta-norma.herokuapp.com/api/users/login", {
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${token}`
          }
        },(data) => { 
             if(data.success===true) {
               AsyncStorage.setItem("token", data.token)
               dispatch(loginUser(data))
            }else{
              AsyncStorage.removeItem("token")
              console.log(data.msg);
            }  
      })  
      }
    }
  }
  
  const loginUser = data => ({
      type: 'LOGIN_USER',
      payload: jwtDecode(data.token),
      logged: data.logged,
      created: data.created,
  })

  const createUser = data => ({
    type: 'CREATE_USER',
    payload: null,
    logged: data.logged,
    created: data.created,
})