import {Cart} from '../../shared/Cart';
import * as CartActionsType from '../actions/cartActions';

export const cartReducer = (state=Cart,action)=>{
    switch (action.type) {
        case CartActionsType.ADD_TO_CART:
            var item = action.payload;
            return state.concat(item);
        default:
            return state;
    }
}   