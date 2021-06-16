import * as projectActions from "../actions/projectActions";
import {Projects} from '../../shared/Projects';

export const fetchProjects = () => (dispatch) => {
    dispatch(projectsLoading(true));
    setTimeout(()=>{
        dispatch(addProjects(Projects));
    },2000);
}

export const projectsLoading = () => ({
    type: projectActions.LOADING_PORJECTS
})

export const addProjects = (projects) => ({
    type: projectActions.ADD_PROJECTS,
    payload:projects
})

export const projectsFailed = (errmess) => ({
    type:projectActions.FAILED_PROJECTS,
    payload : errmess
})