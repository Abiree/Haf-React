import * as LoginRegisterActions from "../actions/LoginRegisterActions";

export const loginregisterReducer = (
    state={
        isLoading:true,
        errMess:null,
        userDetail : []
    },
    action
) => {
    switch (action.type) {
        case LoginRegisterActions.GET_USER:
            return {...state,isLoading:false,errMess:null,userDetail:action.payload};
        case LoginRegisterActions.LOADING_USER:
            return {...state,isLoading:true,errMess:null , userDetail:[]};
        case LoginRegisterActions.NO_USER:
            return {...state,isLoading:false,errMess:action.payload};
        default:
            return state;
    }

}