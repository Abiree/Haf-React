import * as treesActions from "../actions/treesActions";
import {Trees} from '../../shared/Market';

export const fetchTrees = () => (dispatch) => {
    dispatch(treesLoading(true));
    setTimeout(()=>{
        dispatch(addTrees(Trees));
    },3000);
}

export const treesLoading = () => ({
    type: treesActions.LOADING_TREES
})

export const addTrees = (trees) => ({
    type: treesActions.ADD_TREES,
    payload: trees
})

export const failedTrees = (errmess) => ({
    type:treesActions.FAILED_TREES,
    payload:errmess
})