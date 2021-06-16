import * as treesActions from "../actions/treesActions";

export const treesReducer = (
    state={
        isLoading:true,
        errMess:null,
        treesList:[]
    },
    action
    )=>{
    switch (action.type) {
        case treesActions.ADD_TREES:
            return {...state,isLoading:false, errMess:null, treesList:action.payload };
        case treesActions.LOADING_TREES:
            return {...state,isLoading:true, errMess:null, treesList:[] };
        case treesActions.FAILED_TREES:
            return {...state,isLoading:false, errMess:action.payload };
        default:
            return state;
    }
}   