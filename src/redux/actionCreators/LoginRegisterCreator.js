import * as LoginRegisterActions from "../actions/LoginRegisterActions";
import {User} from '../../shared/User';

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
    setTimeout(()=>{
        dispatch(getUser(User));
    },1000)
};

export const fetchUser = () => (dispatch) =>{
    dispatch(loadingUser(true));
    setTimeout(()=>{
        dispatch(getUser(User));
    },3000);    
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

