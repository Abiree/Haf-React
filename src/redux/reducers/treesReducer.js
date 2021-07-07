import * as treesActions from "../actions/treesActions";

export const treesReducer = (
    state={
        query:null,
        pagination: 1,
        isLoading:true,
        errMess:null,
        treesList:[],
        allTrees: []
    },
    action
    )=>{
    switch (action.type) {
        case treesActions.ADD_TREES:
            return {...state,isLoading:false, errMess:null, treesList:action.payload ,query:action.query,pagination: action.pagination};
        case treesActions.LOADING_TREES:
            return {...state,isLoading:true, errMess:null, treesList:[] , pagination: 1 };
        case treesActions.FAILED_TREES:
            return {...state,isLoading:false, errMess:action.payload };
        case treesActions.ADD_ALL_TREES:
          return {
            ...state,
            isLoading: false,
            errMess: null,
            allTrees: action.payload
          }
        default:
            return state;
    }
}   