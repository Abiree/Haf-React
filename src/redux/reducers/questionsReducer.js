import {Questions} from '../../shared/QR';
import * as QuestionActionTypes from '../actions/questionsActions';
export const questionsReducer = (state = Questions , action) =>{
    switch (action.type) {
        case QuestionActionTypes.ADD_QUESTION:
            var Question = action.payload;
            Question.id = state.length;
            Question.Date = new Date().toISOString();
            return state.concat(Question);
        default:
            return state;
    }
}