import * as projectActions from "../actions/projectActions";
import axios from 'axios';

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    axios.get('/api/projects?limit=8').then((result)=> {dispatch(addProjects(result.data))});
}

export const projectsLoading = () => ({
    type: projectActions.LOADING_PORJECTS
})

export const addProjects = (projects,number) => {
    console.log(number);
    return ({
    type: projectActions.ADD_PROJECTS,
    payload:projects,
    pagination:number
    })
}

export const projectsFailed = (errmess) => ({
    type:projectActions.FAILED_PROJECTS,
    payload : errmess
})

export const fetchPagination = (Number) => (dispatch) => {
    console.log(Number);
    dispatch(projectsLoading(true));
    const url = "/api/projects?limit=8&page="+Number;
    axios.get(url).then(result=>{dispatch(addProjects(result.data,Number))});
}