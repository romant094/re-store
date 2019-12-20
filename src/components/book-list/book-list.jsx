import React from 'react';
import {BookListItem} from '../book-list-item';

export const BookList = ({books, onAddedToCart}) => (
    <ul className='list-group mb-5'>
        {
            books.map(book => <BookListItem key={book.id} book={book} onAddedToCart={() => onAddedToCart(book.id)} />)
        }
    </ul>
);


