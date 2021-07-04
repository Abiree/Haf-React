import * as projectActionTypes from '../actions/projectActions';

export const projectsReducer = ( state = {
  query:null,
  pagination: 1,
  isLoading: true,
  errMess: null,
  projectsList: [],
  allProjects: []
}, action ) => {
  switch ( action.type ) {
    case projectActionTypes.ADD_PROJECTS:
      return {
        ...state,
        query:action.query,
        pagination: action.pagination,
        isLoading: false,
        errMess: null,
        projectsList: action.payload
      };
    case projectActionTypes.LOADING_PORJECTS:
      return {
        ...state,
        pagination: 1,
        isLoading: true,
        errMess: null,
        projectsList: []
      };
    case projectActionTypes.ADD_ALL_PROJECTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        allProjects: action.payload
      }
    case projectActionTypes.FAILED_PROJECTS:
      return {
        ...state,
        pagination: 1,
        isLoading: false,
        errMess: action.payload
      }
    default:
      return state;
  }
}
