import {CART, FETCH_BOOKS} from '../actions/constants';
import {updateCartItem, updateCart, updateOrder} from '../utils';

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;

    console.log(type)

    switch (type) {
        case FETCH_BOOKS.request:
            return {
                ...state,
                books: []
            };
        case FETCH_BOOKS.success:
            return {
                ...state,
                books: payload,
                loading: false
            };
        case FETCH_BOOKS.failure:
            return {
                ...state,
                loading: false,
                error: payload
            };
        case CART.addItem:
            return updateOrder(state, payload, 1);

        case CART.decreaseCount:
            return updateOrder(state, payload, -1);

        case CART.deleteItem:
            const item = state.cartItems.find(book => book.id === payload)
            return updateOrder(state, payload, -item.count);

        default:
            return state;
    }
};
