import * as LoginRegisterActions from "../actions/LoginRegisterActions";
import {User} from '../../shared/User';
import axios from 'axios';

export const IndividuRegister = (FirstName,LastName,Email,Password) => (dispatch)=> {
    
    dispatch(loadingUser(true));
    let formData = new FormData()
      formData.append('name', FirstName+' '+LastName)
      formData.append('email',Email)
      formData.append('password',Password)
      
    
    
    axios.post('/api/donors',formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((result)=>dispatch(getUser(result.data)))
    .catch((err)=>failedUser(err));
};
/*({
    type: LoginRegisterActions.INDIVIDU_REGISTER,
    payload:{
        FirstName : FirstName,
        LastName : LastName,
        Email : Email,
        Password : Password
    }
});
*/

export const OrganisationRegister = (OrganisationName, Adresse ,Phone,Email,Password) => 
(dispatch)=> {
    
    dispatch(loadingUser(true));
    let formData = new FormData()
      formData.append('name', OrganisationName)
      formData.append('email',Email)
      formData.append('password',Password)
      formData.append('address',Adresse)
      formData.append('phone',Phone)
      formData.append('type',"Organisation")
    
    console.log(formData)
    
    axios.post('/api/donors',formData,{
        headers:{
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((result)=>dispatch(getUser(result.data)))
    .catch((err)=>failedUser(err));
};
/*({
    type: LoginRegisterActions.ORGANISATION_REGISTER,
    payload: {
        OrganisationName : OrganisationName,
        Adresse : Adresse,
        Phone : Phone,
        Email : Email,
        Password : Password
    }
});
*/
export const Login = (Email,Password) => (dispatch)=> {
   
    
    dispatch(loadingUser(true));
    const user = JSON.stringify({
        "email": Email,
        "password": Password
    });
    console.log(user)
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
export const getUser = (user) => {
    console.log(user)
    return({
    type:LoginRegisterActions.GET_USER,
    payload:user})
};

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