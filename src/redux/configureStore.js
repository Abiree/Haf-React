import {createStore,combineReducers,applyMiddleware} from 'redux';
import {loginregisterReducer} from './reducers/LoginRegisterReducer';
import {treesReducer} from './reducers/treesReducer';
import {questionsReducer} from './reducers/questionsReducer';
import {projectsReducer} from './reducers/projectsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () =>{
    const store = createStore(
        combineReducers({
            User: loginregisterReducer,
            Questions: questionsReducer,
            Projects: projectsReducer,
            Trees: treesReducer,
        }),
        applyMiddleware(thunk)
    );
    return store;
};

