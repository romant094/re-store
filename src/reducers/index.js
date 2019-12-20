import {CART, FETCH_BOOKS} from '../actions/constants';

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
            const book = books.find(book => book.id === payload);

            const newItem = {
                id: book.id,
                title: book.title,
                count: 1,
                price: book.price
            };

            return {
                ...state,
                cartItems: [...cartItems, newItem]
            };
        default:
            return state;
    }
};
