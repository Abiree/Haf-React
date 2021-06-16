import * as ActionTypes from '../actions/questionsActions';

export const addQuestion = (Name, Email , Subject , Message) => ({
    type:ActionTypes.ADD_QUESTION,
    payload:{
        Name : Name,
        Email : Email,
        question : Subject,
        answer : Message
    }
})
