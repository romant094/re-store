import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BookList} from './book-list';
import {withBookstoreService} from '../hoc';
import {compose} from '../../utils';

import {fetchBooks} from '../../actions'
import {Spinner} from '../spinner';
import {ErrorIndicator} from '../error-indicator';
import {cartActions} from '../../actions';

class BookListContainer extends Component {
    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator error={error} />
        }

        return <BookList books={books} onAddedToCart={onAddedToCart} />
    }
}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    const {onAddedToCart} = cartActions;
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddedToCart: (id) => dispatch(onAddedToCart(id))
    }
};

// const BookListWrapped = withBookstoreService()(connect(mapStateToProps, actions)(BookList));
const BookListWrapped = compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

export {BookListWrapped as BookList};
