import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const withBootstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return (
                            <Wrapped {...props} bookstoreService={bookstoreService}/>
                        )
                    }
                }
            </BookstoreServiceConsumer>
        )
    }
};

export {withBootstoreService};