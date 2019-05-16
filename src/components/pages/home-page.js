import React from 'react';
import BookList from '../book-list';

const HomePage = () => {
    return (
        <BookList books={[{
            id: 1,
            title: 'Эркюль Пуаро',
            author: 'Агата Кристи'
        },
            {
                id: 2,
                title: 'Преступление и наказание',
                author: 'Достоевский Ф.М.'
            }]}/>
    )
};

export default HomePage;