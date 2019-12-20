import React from 'react';

export const BookListItem = ({book, onAddedToCart}) => {
    const {title, author, price, image} = book;
    return (
        <li className='list-group-item'>
            <div className='d-flex'>
                <div className='mr-5'>
                    <img
                        src={image}
                        alt="обложка"
                        style={{
                            maxHeight: '200px',
                            width: 'auto'
                        }}
                    />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{author}</p>
                    <p><strong>Цена: {price}₽</strong></p>
                    <button className='btn btn-primary' onClick={onAddedToCart}>Добавить в корзину
                    </button>
                </div>
            </div>
        </li>
    );
};
