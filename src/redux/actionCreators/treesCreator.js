import * as treesActions from "../actions/treesActions";
import axios from 'axios';

export const fetchTrees = () => (dispatch) => {
    dispatch(treesLoading(true));
    axios.get('/api/trees?limit=8').then((result)=>dispatch(addTrees(result.data)));
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