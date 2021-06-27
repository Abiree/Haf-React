import * as QuestionActionTypes from '../actions/questionsActions';

export const questionsReducer = ( state = {
  loading: false,
  errMess: null,
  questions: []
}, action ) => {
  switch ( action.type ) {
    case QuestionActionTypes.GET_QUESTIONS:
      return {
        ...state,
        loading: false,
        errMess: null,
        questions: action.payload
      }
    case QuestionActionTypes.LOADING_QUESTIONS:
      return {
        ...state,
        loading: true,
        errMess: null,
        questions: []
      }
    case QuestionActionTypes.ERR_QUESTIONS:
      return {
        ...state,
        loading: false,
        errMess: action.payload
      }
    default:
      return state;
  }
}
