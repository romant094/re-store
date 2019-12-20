import {CART, FETCH_BOOKS} from '../actions/constants';
import {updateCartItem, countCartTotal, updateCart} from '../utils';

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
            const {books, cartItems} = state;
            const itemIndex = cartItems.findIndex(book => book.id === payload);
            const book = books.find(book => book.id === payload);

            const newItem = updateCartItem(book, cartItems[itemIndex]);
            const newCart = updateCart(cartItems, newItem, itemIndex);

            return {
                ...state,
                cartItems: newCart,
                orderTotal: countCartTotal(newCart, 'total'),
                orderTotalQty: countCartTotal(newCart, 'count')
            };

        case CART.deleteItem:


            return {
                ...state
            };
        default:
            return state;
    }
};
