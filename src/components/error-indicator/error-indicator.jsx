import React from 'react';

export const ErrorIndicator = ({error}) => {
    return (
        <div>
            Произошла ошибка... {error.toString()}
        </div>
    );
};
