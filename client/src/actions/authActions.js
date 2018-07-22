import axios from 'axios';
import { GET_ERRORS } from './types';


//Register User
export const registerUser = (userData, history) => dispatch => {

  axios.post('/api/users/register', userData)
    .then(result => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get User Token
export const loginUser = (userData) => dispatch => {
  axios.post('/api/users/login', userData)
    .then(res => {
      //Save to localStorage
      const { token } = res.data;
      //Set token to local storage
      localStorage.setItem('jwtToken', token);
      //Set token to Authorization header
      setAuthToken(token);
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};
