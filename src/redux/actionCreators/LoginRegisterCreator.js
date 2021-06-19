import * as LoginRegisterActions from "../actions/LoginRegisterActions";
import {User} from '../../shared/User';
import axios from 'axios';

export const IndividuRegister = (FirstName,LastName,Email,Password) => ({
    type: LoginRegisterActions.INDIVIDU_REGISTER,
    payload:{
        FirstName : FirstName,
        LastName : LastName,
        Email : Email,
        Password : Password
    }
});

export const OrganisationRegister = (OrganisationName, Adresse ,Phone,Email,Password) => ({
    type: LoginRegisterActions.ORGANISATION_REGISTER,
    payload: {
        OrganisationName : OrganisationName,
        Adresse : Adresse,
        Phone : Phone,
        Email : Email,
        Password : Password
    }
});

export const Login = (Email,Password) => (dispatch)=> {
    
    dispatch(loadingUser(true));
    const user = JSON.stringify({
        "email": Email,
        "password": Password
    });
    
    axios.post('/api/donors/login',user,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    .then((result)=>dispatch(getUser(result.data)))
    .catch((err)=>failedUser(err));
};

export const fetchUser = () => (dispatch) =>{
    dispatch(loadingUser(true));
    axios.get('/jwtid')
    .then((res)=>dispatch(getUser(res.data)))
    .catch((err)=>dispatch(failedUser(err)));
}

export const loadingUser = () => ({
    type:LoginRegisterActions.LOADING_USER
})
export const getUser = (user) => ({
    type:LoginRegisterActions.GET_USER,
    payload:user
});

export const failedUser = (errmess) => ({
    type:LoginRegisterActions.NO_USER,
    payload : errmess
})

export const logout = () => (dispatch) =>{
    dispatch(loadingUser(true));
    axios.get('/api/donors/logout')
    .then((res)=>dispatch(getUser(null)))
    .catch((err)=>dispatch(failedUser(err)));
}