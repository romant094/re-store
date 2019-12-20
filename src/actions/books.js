import {FETCH_BOOKS} from './constants';

const booksRequested = () => {
    return {
        type: FETCH_BOOKS.request
    }
};
const booksLoaded = (newBooks) => {
    return {
        type: FETCH_BOOKS.success,
        payload: newBooks
    }
};
const booksError = (error) => {
    return {
        type: FETCH_BOOKS.failure,
        payload: error
    }
};

export const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then(data => {
            dispatch(booksLoaded(data));
        })
        .catch(error => dispatch(booksError(error)));
};
