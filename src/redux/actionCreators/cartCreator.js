import * as CartActionsType from '../actions/cartActions';

export const addItemToCart = (id,quantity,price) => ({
    type:CartActionsType.ADD_TO_CART,
    payload:{
        id : id,
        quantity:quantity,
        price:price
    }
})
