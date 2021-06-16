import * as projectActionTypes from '../actions/projectActions';

export const projectsReducer = (
    state={
        isLoading: true,
        errMess: null,
        projectsList: []
    },
    action
    )=>{
    switch (action.type) {
        case projectActionTypes.ADD_PROJECTS:
            return {...state, isLoading:false, errMess:null, projectsList:action.payload};
        case projectActionTypes.LOADING_PORJECTS:
            return {...state, isLoading:true, errMess:null, projectsList:[]};
        case projectActionTypes.FAILED_PROJECTS:
            return {...state, isLoading: false, errMess: action.payload}
        default:
            return state;
    }
}   