import * as ActionTypes from '../actions/questionsActions';
import axios from 'axios';

export const addQuestion = ( question ) => (dispatch) => {
  const questionJson = {
    "question" : question
  }
  axios.post("/api/questions",questionJson,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
} 

export const fetchQuestions = () => ( dispatch ) => {
  dispatch( loadingQuestions( true ) );
  axios.get( "/api/questions?onlyWithAnswers=true" ).then( ( result ) => {
    dispatch( getQuestions( result.data ) )
  } ).catch( ( err ) => {
    dispatch( errQuestions( err ) )
  } )
}

export const getQuestions = ( results ) => ( { type: ActionTypes.GET_QUESTIONS, payload: results } )

export const loadingQuestions = () => ( { type: ActionTypes.LOADING_QUESTIONS } )

export const errQuestions = ( err ) => ( { type: ActionTypes.ERR_QUESTIONS, payload: err } )
