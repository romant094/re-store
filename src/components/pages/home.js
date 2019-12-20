import React from 'react';
import {BookList} from '../book-list';
import {Table} from '../table/table';

export const Home = () => {
    return (
        <div>
            <BookList />
            <Table />
        </div>
    );
};
