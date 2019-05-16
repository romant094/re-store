import React from 'react';

const BookListItem = ({book})=>{
    const {title, author} = book;
    return (
        <>
            <div>{title}</div>
            <div>{author}</div>
        </>
    )
};

export default BookListItem;