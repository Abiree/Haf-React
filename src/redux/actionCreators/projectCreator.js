import * as projectActions from "../actions/projectActions";
import axios from 'axios';
import { fetchUser } from "./LoginRegisterCreator";
export const fetchProjects = () => ( dispatch ) => {
  dispatch( projectsLoading( true ) );
  axios.get( '/api/projects?limit=8' ).then( ( result ) => {
    dispatch( addProjects( result.data ) )
  } );
}

export const fetchAllProjects = () => ( dispatch ) => {
  dispatch( projectsLoading( true ) );
  axios.get( '/api/projects?limit=99' ).then( ( result ) => {
    dispatch( addAllProjects( result.data ) )
  } ).catch( ( err ) => {
    dispatch( projectsFailed( err ) )
  } );
}

export const AddDonation = (projectId,donorId,amount) => (dispatch)=> {
  
  const donation = JSON.stringify({
      "projectId": projectId,
      "donorId": donorId,
      "amount": amount
  });
  console.log(donation)
  axios.post('/api/donations',donation,{
      headers:{
          'Content-Type': 'application/json'
      }
  }).then((result)=>{
    dispatch(fetchUser())
}).catch((err)=>{
    alert("an error have occured")
});
}



export const projectsLoading = () => ( { type: projectActions.LOADING_PORJECTS } )

export const addProjects = ( projects, number , query) => {
  return ( { type: projectActions.ADD_PROJECTS, payload: projects, pagination: number , query: query} )
}
export const addAllProjects = ( result ) => {
  return ( { type: projectActions.ADD_ALL_PROJECTS, payload: result } )
}

export const projectsFailed = ( errmess ) => ( { type: projectActions.FAILED_PROJECTS, payload: errmess } )

export const fetchPagination = ( Number , query) => ( dispatch ) => {
  console.log(query)
  if(query){
    const url = "/api/projects?" + query +"&limit=8&page="+Number;
    dispatch(projectsLoading(true));
    axios.get(url).then((result)=>{
      dispatch(addProjects(result.data , Number , query))
    }).catch((err)=>{
      dispatch(projectsFailed(err))
    })
  }
  else{
    console.log( Number );
    dispatch( projectsLoading( true ) );
    const url = "/api/projects?limit=8&page=" + Number;
    axios.get( url ).then( result => {
      dispatch( addProjects( result.data, Number , null ) )
    } );
  }
}
