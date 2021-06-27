import * as ActionTypes from '../actions/questionsActions';
import axios from 'axios';

export const addQuestion = ( Name, Email, Subject, Message ) => ( {
  type: ActionTypes.ADD_QUESTION,
  payload: {
    Name: Name,
    Email: Email,
    question: Subject,
    answer: Message
  }
} )

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
