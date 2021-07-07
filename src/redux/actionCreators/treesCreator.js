import * as treesActions from "../actions/treesActions";
import axios from 'axios';
import {fetchUser} from './LoginRegisterCreator';

export const fetchTrees = () => (dispatch) => {
    dispatch(treesLoading(true));
    axios.get('/api/trees?limit=5').then((result)=>dispatch(addTrees(result.data)));
}

export const fetchAllTrees = () => ( dispatch ) => {
  dispatch( treesLoading( true ) );
  axios.get( '/api/trees?limit=99' ).then( ( result ) => {
    dispatch( addAllTrees( result.data ) )
  } ).catch( ( err ) => {
    dispatch( failedTrees( err ) )
  } );
}

export const addAllTrees = ( result ) => {
  return ( { type: treesActions.ADD_ALL_TREES, payload: result } )
}

export const treesLoading = () => ({
    type: treesActions.LOADING_TREES
})

export const addTrees = (trees , number , query) => ({
    type: treesActions.ADD_TREES,
    payload: trees,
    pagination: number,
    query: query
})

export const failedTrees = (errmess) => ({
    type:treesActions.FAILED_TREES,
    payload:errmess
})

export const removeFromCart = (userId,id) => (dispatch) => {
    const tree = JSON.stringify({
        "treeId": id
    });
    const Url = '/api/donors/'+userId+'/cart/remove'
    axios.put(Url, tree , {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((result)=>{
        dispatch(fetchUser())
    }).catch((err)=>{
        alert("an error have occured")
    })
}

export const addToCart = (id,quantity,userId) => (dispatch) => {
   
    const tree = JSON.stringify({
        "treeId": id,
        "quantity" : quantity
    });

    const Url = "/api/donors/"+userId+"/cart/add"
    console.log(Url)
    axios.put(Url, tree , {
        headers:{
            'Content-Type': 'application/json'
        }
    }).then((result)=>{
        dispatch(fetchUser())
    }).catch((err)=>{
        alert("an error have occured")
    })
}

export const fetchTreePagination = ( Number , query) => ( dispatch ) => {
  if(query){
    const url = "/api/trees?" + query +"&limit=5&page="+Number;
    dispatch(treesLoading(true));
    axios.get(url).then((result)=>{
      dispatch(addTrees(result.data , Number , query))
    }).catch((err)=>{
      dispatch(failedTrees(err))
    })
  }
  else{
    console.log( Number );
    dispatch( treesLoading( true ) );
    const url = "/api/trees?limit=5&page=" + Number;
    axios.get( url ).then( result => {
      dispatch( addTrees( result.data, Number , null ) )
    } );
  }
}
