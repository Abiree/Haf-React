import {User} from '../shared/User';
import {Questions} from '../shared/QR';
import {Projects} from '../shared/Projects';
import {Trees} from '../shared/Market';

export const initialState = {
    User : User,
    Questions : Questions,
    Projects : Projects,
    Trees : Trees
};

export const Reducer = (state= initialState , action)=>{
    return state;
};

